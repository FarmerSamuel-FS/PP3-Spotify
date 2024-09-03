const express = require("express");
const router = express.Router();
const axios = require("axios");
const User = require("../models/users");
const protectRoute = require("../middleware/authMiddleware");

// Search route
router.get("/", protectRoute, async (req, res) => {
  const query = req.query.q;
  const type = req.query.type || "track"; // Default to searching tracks

  if (!query) {
    return res.status(400).json({ message: "Search query is required" });
  }

  try {
    const user = req.user; // The authenticated user from the protectRoute middleware
    const accessToken = user.accessToken;

    const response = await axios.get("https://api.spotify.com/v1/search", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        q: query,
        type: type,
      },
    });

    res.json(response.data);
  } catch (err) {
    console.error("Error searching Spotify:", err);
    res.status(500).json({ message: "Failed to search Spotify" });
  }
});

module.exports = router;
