const express = require('express');
const { parseToken } = require('../utils');
const { verifyToken } = require('../controller/accessGrantedController');

const Router = express.Router(); //hoisting

Router.get('/verifyToken', parseToken, verifyToken);
module.exports = Router;
