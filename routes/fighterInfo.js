const express = require('express');
const {
  fighterInfoController
} = require('../controller/fighterInfoController.js');

const app = express();
const Router = express.Router();

Router.get('/fighterInfo', fighterInfoController);

module.exports = Router;
