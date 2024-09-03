const express = require("express");
const passport = require("passport");
const router = express.Router();

// Login route
router.get(
  "/login",
  passport.authenticate("spotify", {
    scope: ["user-read-email", "user-read-private"],
    showDialog: true,
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

    // Redirect to React frontend with token
    res.redirect(`http://localhost:3000?token=${data.token}`);
  })(req, res, next);
});

module.exports = router;
