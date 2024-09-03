const express = require("express");
const router = express.Router();
const axios = require("axios");
const protectRoute = require("../middleware/authMiddleware");
const User = require("../models/users");

// Search route
router.get("/search", protectRoute, async (req, res) => {
  const query = req.query.q;
  if (!query) {
    return res.status(400).json({ message: "No search query provided" });
  }

  try {
    const user = await User.findOne({ spotifyId: req.user.spotifyId });
    if (!user || !user.accessToken) {
      return res
        .status(401)
        .json({ message: "Invalid or missing access token" });
    }

    const response = await axios.get("https://api.spotify.com/v1/search", {
      headers: {
        Authorization: `Bearer ${user.accessToken}`,
      },
      params: {
        q: query,
        type: "artist,album,track", // Adjust types based on your needs
      },
    });

    res.json(response.data);
  } catch (error) {
    console.error("Error searching Spotify:", error);
    res
      .status(500)
      .json({ message: "An error occurred while searching Spotify" });
  }
});

module.exports = router;
