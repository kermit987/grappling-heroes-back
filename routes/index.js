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

// passport local need to be username and password
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
  const header = req.headers['authorization']; //token in store in the header['Authorization']

  if (typeof header !== undefined) {
    const bearer = header.split(' '); //remove 'bearer'
    const token = bearer[1]; //get only the token

    req.token = token;

    next();
  } else {
    res.sendStatus(403);
  }
};

const verifyToken = (req, res) => {
  jwt.verify(req.token, privateKey, (err, authorizeData) => {
    if (err) {
      console.log('verifyToken fail');
      res.sendStatus(403);
    } else {
      console.log('Inside the else of the verify token');
      res.json({
        message: 'Token valid',
        authorizeData //Content user Credential
      });
    }
  });
};

Router.get('/verifyToken', checkToken, (req, res) => {
  verifyToken(req, res);
});

Router.get('/failure', (req, res) => {
  console.log(req.body);
  res.status(403).send('/failure');
});

Router.post(
  '/login',
  passport.authenticate('local', {
    failureRedirect: '/failure', //will redirect to the /failure routes
    failureFlash: true //displaying more information when fail
  }),
  (req, res) => {
    //create the token here instead of from th einside of passport.authenticate
    //to have access to req.user (user credential) and create the token
    jwt.sign(req.user, privateKey, { expiresIn: '1h' }, (err, token) => {
      if (err) {
        console.log('error ', err);
      }
      res.json({
        success: true,
        token: token
      });
    });
  }
);

module.exports = {
  Router
};

// postman
// header Authorization from the client but trying to get the client via authorization ('check the upper case') from the code
//value "Bearer " + token (take care of the space between Bearer and token)
