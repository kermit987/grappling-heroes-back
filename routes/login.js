const express = require('express')
const jwt = require('jsonwebtoken')
const { passport } = require('../utils')

/**
 * passport is import from another file since we need the same instance
 * through the whole app
 */

const app = express()
const Router = express.Router()

const privateKey = 'tomato' //put in a env variable

Router.get('/failure', (req, res) => {
  console.log(req.body)
  res.status(403).send('/failure')
})

/**
 * failureRedirect: will redirect to the /failure routes
 * failureFlash: displaying more information when fail
 * create the token in the /login routes instead of from the inside of passport.authenticate
 * to have access to req.user (user credential) and create the token
 */

Router.post(
  '/login',
  passport.authenticate('local', {
    failureRedirect: '/failure',
    failureFlash: true
  }),
  (req, res) => {
    console.log('before signing the token')
    jwt.sign(req.user, privateKey, { expiresIn: '1h' }, (err, token) => {
      if (err) {
        console.log('error ', err)
      }
      res.json({
        success: true,
        token: token
      })
    })
  }
)

module.exports = {
  Router
}
