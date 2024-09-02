require("dotenv").config();
console.log("Environment Test - MONGO_URI:", process.env.MONGO_URI);

const express = require("express");
const cors = require("cors");
const connectDB = require("./mongoConfig");
const passport = require("passport");
const session = require("express-session");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const SpotifyStrategy = require("passport-spotify").Strategy;
const jwt = require("jsonwebtoken");
const User = require("./models/users");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

// Session setup
app.use(
  session({
    secret: process.env.JWT_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }, // Set to true in production with HTTPS
  }),
);

// Passport setup
app.use(passport.initialize());
app.use(passport.session());

// JWT Strategy Configuration
const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET,
};

passport.use(
  new JwtStrategy(opts, async (jwt_payload, done) => {
    try {
      const user = await User.findOne({ spotifyId: jwt_payload.spotifyId });
      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    } catch (err) {
      return done(err, false);
    }
  }),
);

// Spotify Strategy Configuration
passport.use(
  new SpotifyStrategy(
    {
      clientID: process.env.SPOTIFY_CLIENT_ID,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
      callbackURL: process.env.SPOTIFY_REDIRECT_URI,
    },
    async (accessToken, refreshToken, expires_in, profile, done) => {
      try {
        // Check if user exists, or create a new user
        let user = await User.findOne({ spotifyId: profile.id });
        if (!user) {
          user = await User.create({
            spotifyId: profile.id,
            accessToken: accessToken,
            refreshToken: refreshToken,
            tokenExpires: Date.now() + expires_in * 1000,
          });
        } else {
          user.accessToken = accessToken;
          user.refreshToken = refreshToken;
          user.tokenExpires = Date.now() + expires_in * 1000;
          await user.save();
        }

        // Generate JWT
        const token = jwt.sign(
          {
            spotifyId: user.spotifyId,
            accessToken: user.accessToken,
          },
          process.env.JWT_SECRET,
          { expiresIn: "1h" },
        );

        return done(null, { user, token }); // Pass the token to the callback
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
  res.send("Hello, PP3-Spotify!");
});

// Fallback route for 404 errors
app.use((req, res) => {
  res.status(404).send("Route not found");
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
