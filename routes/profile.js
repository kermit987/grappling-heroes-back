const express = require('express');
const Router = express.Router();

const profile = {
  name: 'Steven',
  lastname: 'Loo Fat',
  birth: '07/12/1995',
  weight: '60kg',
  belt: 'White',
  stripe: '1'
};

Router.get('/profile', (req, res) => {
  res.status(200).send(profile);
});

module.exports = Router;