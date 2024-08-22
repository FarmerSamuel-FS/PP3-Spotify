const express = require("express");
const axios = require("axios");
const querystring = require("querystring");
const router = express.Router();

const client_id = process.env.SPOTIFY_CLIENT_ID; // Your client id
const client_secret = process.env.SPOTIFY_CLIENT_SECRET; // Your client secret
const redirect_uri = process.env.SPOTIFY_REDIRECT_URI; // Your redirect uri

router.get("/callback", async (req, res) => {
  const code = req.query.code || null;
  const state = req.query.state || null;

  if (!code || !state) {
    return res.redirect(
      "/#" +
        querystring.stringify({
          error: "state_mismatch",
        }),
    );
  }

  try {
    const response = await axios.post(
      "https://accounts.spotify.com/api/token",
      querystring.stringify({
        code: code,
        redirect_uri: redirect_uri,
        grant_type: "authorization_code",
      }),
      {
        headers: {
          Authorization:
            "Basic " +
            Buffer.from(client_id + ":" + client_secret).toString("base64"),
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
    );

    const access_token = response.data.access_token;
    const refresh_token = response.data.refresh_token;

    // For now, let's log the tokens to verify we're getting them
    console.log("Access Token:", access_token);
    console.log("Refresh Token:", refresh_token);

    // Redirect to the frontend with tokens as query parameters (this is for demonstration; use secure storage in production)
    res.redirect(
      "/#" +
        querystring.stringify({
          access_token: access_token,
          refresh_token: refresh_token,
        }),
    );
  } catch (error) {
    console.error("Error during token exchange:", error);
    res.redirect(
      "/#" +
        querystring.stringify({
          error: "invalid_token",
        }),
    );
  }
});

module.exports = router;
