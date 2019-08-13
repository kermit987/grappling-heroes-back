const express = require('express')
const { passport } = require('../utils')
const { failure, login } = require('../controller/login.controller')

/**
 * passport is import from another file since we need the same instance
 * through the whole app
 */

const Router = (module.exports = express.Router())

/**
 * failureRedirect: will redirect to the /failure routes
 * failureFlash: displaying more information when fail
 * create the token in the /login routes instead of from the inside of passport.authenticate
 * to have access to req.user (user credential) and create the token
 */

Router.get('/failure', failure)

Router.post(
  '/login',
  passport.authenticate('local', {
    failureRedirect: '/failure',
    failureFlash: true
  }),
  login
)
