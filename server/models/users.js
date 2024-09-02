const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  spotifyId: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: false, // Optional
  },
  email: {
    type: String,
    required: false, // Optional
  },
  password: {
    type: String,
    required: false, // Optional
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
