const express = require('express');
const Router = express.Router();

let profile = {
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

Router.post('/profile', (req, res) => {
  const update = req.body.update;

  profile = update;
  res.status(200);
});

module.exports = Router;
