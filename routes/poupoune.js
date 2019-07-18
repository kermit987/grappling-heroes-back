const express = require('express');
const { parseToken } = require('../utils');

const Router = express.Router();

Router.get('/poupoune', (req, res) => {
  res.status(200).send('inside the poupoune');
});

module.exports = Router;
