const express = require("express");
const passport = require("passport");
const router = express.Router();

// Login route
router.get(
  "/login",
  passport.authenticate("spotify", {
    scope: ["user-read-email", "user-read-private"],
    showDialog: true, // Optional: show Spotify's consent dialog on each login
  }),
);

// Callback route
router.get("/callback", (req, res, next) => {
  passport.authenticate("spotify", (err, data, info) => {
    if (err) {
      return next(err);
    }
    if (!data) {
      return res.redirect("/");
    }

    // Send the JWT to the client
    res.redirect("/?token=" + data.token);
  })(req, res, next);
});

// Logout route (optional)
router.get("/logout", (req, res) => {
  req.logout(() => {
    res.redirect("/");
  });
});

module.exports = router;
