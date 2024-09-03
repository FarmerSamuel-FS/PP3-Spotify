const jwt = require("jsonwebtoken");
const User = require("../models/users");

const protectRoute = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res
      .status(401)
      .json({ message: "Access denied, no token provided" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findOne({ spotifyId: decoded.spotifyId });

    if (!user || user.jwtToken !== token || user.jwtTokenExpires < Date.now()) {
      return res.status(401).json({ message: "Invalid or expired token" });
    }

    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Failed to authenticate token" });
  }
};

module.exports = protectRoute;
