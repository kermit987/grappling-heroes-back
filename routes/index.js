const express = require('express')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy

const app = express()
const Router = express.Router()


passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});

passport.use(new LocalStrategy(
  function (username, password, done) {
    if (username !== 'steven') {
      return done(null, false, { message: 'Incorrect username' })
    }
    else if (password !== 'epitech') {
      return done(null, false, { message: 'Incorrect password' })
    }
    else {
      return done(null, username)
    }
    // User.findOne({ username: username }, function (err, user) {
    //   if (err) { return done(err); }
    //   if (!user) {
    //     return done(null, false, { message: 'Incorrect username.' });
    //   }
    //   if (!user.validPassword(password)) {
    //     return done(null, false, { message: 'Incorrect password.' });
    //   }
    //   return done(null, user);
    // });
  }
));

Router.get('/', (req, res) => {
  res.status(200).send('/')
})

Router.get('/failure', (req, res) => {
  res.status(200).send('/failure')
})

Router.post('/login',
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/failure',
    failureFlash: true
  }), (req, res) => {
    res.status(200).send('Inside the /login')
  })

module.exports = {
  Router
}