const express = require('express');
const {
  fighterInfoController
} = require('../controller/fighterInfoController.js');

const app = express();
const Router = express.Router();
const { parseToken } = require('../utils');

Router.get('/fighterInfo', parseToken, (req, res) => {
  console.log('poupoune');
});

module.exports = Router;
