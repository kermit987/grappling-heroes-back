const express = require('express')
const { parseToken } = require('utils')
const { verifyToken } = require('controller/access.controller')

const Router = express.Router() //hoisting

Router.get('/verifyToken', parseToken, verifyToken)
module.exports = Router
