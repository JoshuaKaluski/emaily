const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const { googleClientID, googleClientSecret } = require("../config/keys");
const User = require('../models/User');

//Set up passport to use Google OAuth
passport.use(
  new GoogleStrategy(
    {
      clientID: googleClientID,
      clientSecret: googleClientSecret,
      callbackURL: "/auth/google/callback"
    },
    (accessToken, refreshToken, profile, done) => {
      new User({ googleID: profile.id}).save();
    }
  )
);