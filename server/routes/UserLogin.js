const express = require("express");
const querystring = require("querystring");
const router = express.Router();

const client_id = process.env.SPOTIFY_CLIENT_ID; // Your client id
const redirect_uri = process.env.SPOTIFY_REDIRECT_URI; // Your redirect uri

// Generate a random string for the state parameter
const generateRandomString = (length) => {
  let text = "";
  const possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

router.get("/login", (req, res) => {
  const state = generateRandomString(16);
  const scope = "user-read-private user-read-email"; // Add any other scopes your app requires

  const authURL =
    "https://accounts.spotify.com/authorize?" +
    querystring.stringify({
      response_type: "code",
      client_id: client_id,
      scope: scope,
      redirect_uri: redirect_uri,
      state: state,
    });

  res.redirect(authURL);
});

module.exports = router;
