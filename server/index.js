require("dotenv").config();
const express = require("express");
const cors = require("cors");
const session = require("express-session");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const SpotifyStrategy = require("passport-spotify").Strategy;
const connectDB = require("./config/mongoConfig");
const User = require("./models/users");

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Session setup
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  }),
);

// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

// Spotify OAuth Strategy
passport.use(
  new SpotifyStrategy(
    {
      clientID: process.env.SPOTIFY_CLIENT_ID,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
      callbackURL: process.env.SPOTIFY_REDIRECT_URI,
    },
    async (accessToken, refreshToken, expires_in, profile, done) => {
      try {
        let user = await User.findOne({ spotifyId: profile.id });
        if (!user) {
          user = new User({
            spotifyId: profile.id,
            accessToken: accessToken,
            refreshToken: refreshToken,
            tokenExpires: Date.now() + expires_in * 1000,
          });
        } else {
          user.accessToken = accessToken;
          user.refreshToken = refreshToken;
          user.tokenExpires = Date.now() + expires_in * 1000;
        }

        const jwtToken = jwt.sign(
          {
            spotifyId: user.spotifyId,
            accessToken: user.accessToken,
          },
          process.env.JWT_SECRET,
          { expiresIn: "1h" },
        );

        user.jwtToken = jwtToken;
        user.jwtTokenExpires = Date.now() + 3600 * 1000;

        await user.save();

        return done(null, { user, token: jwtToken });
      } catch (err) {
        return done(err);
      }
    },
  ),
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});

// Import and use the authentication routes
const authRoutes = require("./routes/auth");
app.use("/auth", authRoutes);

// Import and use the search routes
const searchRoutes = require("./routes/routes");
app.use("/api", searchRoutes);

// Middleware to protect routes
const protectRoute = (req, res, next) => {
  const token = req.query.token || req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res
      .status(401)
      .json({ message: "Access denied, no token provided" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid or expired token" });
  }
};

// Protected route example
app.get("/", protectRoute, (req, res) => {
  res.send("Hello, Spotify Music App!");
});

// Fallback route for 404 errors
app.use((req, res) => {
  res.status(404).send("Route not found");
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
