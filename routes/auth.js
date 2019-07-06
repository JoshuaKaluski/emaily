const express = require('express');
const router = express.Router();
const passport = require('passport');

/*
Route:       GET auth/google
Description: Start Google OAuth process
Access:      Public
*/
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"]
  })
);

/*
Route:       GET auth/google/callback
Description: Callback from Google OAuth process
Access:      Private
*/
router.get("/google/callback", passport.authenticate("google"));

module.exports = router;