const express = require('express');
const app = express();

const Router = app.Router();

const profile = {
  name: 'Steven',
  lastname: 'Loo Fat',
  birth: '07/12/1995',
  weight: '60kg',
  team: 'Tahitian Top Team'
};

Router.get('/profile', (req, res) => {
  res.status(200).send(profile);
});
