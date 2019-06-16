const express = require('express')
const { verifyToken, parseToken } = require('../utils')

const app = express()
const Router = express.Router()

Router.get('/verifyToken', parseToken, (req, res) => {
  verifyToken(req, res)
})

module.exports = Router
