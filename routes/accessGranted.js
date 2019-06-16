const express = require('express')
const { parseToken } = require('../utils')
const { verifyToken } = require('../controller/accessGranted.controller')

const app = express()
const Router = express.Router()

Router.get('/verifyToken', parseToken, verifyToken)

module.exports = Router
