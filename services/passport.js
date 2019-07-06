const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const { googleClientID, googleClientSecret } = require("../config/keys");
const User = require('../models/User');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  })
});

//Set up passport to use Google OAuth
passport.use(
  new GoogleStrategy(
    {
      clientID: googleClientID,
      clientSecret: googleClientSecret,
      callbackURL: "/auth/google/callback"
    },
     async (accessToken, refreshToken, profile, done) => {
      let existingUser = await User.findOne({googleID: profile.id});

      if (existingUser) {
        //Exit callback with existing User
        done(null, existingUser);
      } else {
        //Create a new User if none exist
        let user = await new User({googleID: profile.id}).save();

        //Exit callback with new User
        done(null, user);
      }
    }
  )
);