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

/*
Route:       GET auth/api/me
Description: Send current user's profile
Access:      Private
*/
router.get('/api/me', (req, res) => {
  res.send(req.user);
});

module.exports = router;