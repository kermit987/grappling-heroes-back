const express = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const jwt = require('jsonwebtoken');

const app = express();
const Router = express.Router();

const privateKey = 'tomato';

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(id, done) {
  done(null, id);
});

passport.use(
  new LocalStrategy(function(username, password, done) {
    if (username !== 'steven') {
      return done(null, false, { message: 'Incorrect username' });
    } else if (password !== 'epitech') {
      return done(null, false, { message: 'Incorrect password' });
    } else {
      return done(null, { username, password });
    }
  })
);

const checkToken = (req, res, next) => {
  const header = req.headers['authorization'];

  if (typeof header !== undefined) {
    const bearer = header.split(' ');

    console.log('value of bearer ', bearer);

    const token = bearer[1];

    req.token = token;
    next();
  } else {
    res.sendStatus(403);
  }
};

Router.get('/failure', (req, res) => {
  res.status(403).send('/failure');
});

Router.get('/api/protected', checkToken, (req, res) => {
  jwt.verify(req.token, privateKey, (err, authorizeData) => {
    if (err) {
      console.log('ERROR: Could not connect to the protected route');
      res.sendStatus(403);
    } else {
      res.json({
        message: 'Only authorized user can see that message',
        authorizeData //Content user Credential
      });
      console.log('SUCCESS: Connected ');
    }
  });
});

Router.post(
  '/login',
  passport.authenticate('local', {
    failureRedirect: '/failure',
    failureFlash: true
  }),
  (req, res) => {
    jwt.sign(req.user, privateKey, { expiresIn: '1h' }, (err, token) => {
      if (err) {
        console.log('error ', err);
      }
      res.status(200).send(token);
    });
  }
);

module.exports = {
  Router
};

// postman
// header Authorization
//value "Bearer " + token (take care of the space between Bearer and token)
