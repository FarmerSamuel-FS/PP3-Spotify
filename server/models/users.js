const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  spotifyId: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: false, // Make optional
  },
  email: {
    type: String,
    required: false, // Make optional
  },
  password: {
    type: String,
    required: false, // Make optional
  },
  accessToken: {
    type: String,
    required: true,
  },
  refreshToken: {
    type: String,
  },
  tokenExpires: {
    type: Date,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", UserSchema);
