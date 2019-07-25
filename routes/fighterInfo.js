const express = require('express');

// const Router = (module.exports = express.Router());
const Router = express.Router();

const fighter = [
  {
    name: 'Gordon Ryan',
    birth: '07/07/1995'
  },
  {
    name: 'Craig Jones',
    birth: '17/07/1991'
  },
  {
    name: 'Joao Myiao',
    birth: '11/05/1991'
  },
  {
    name: 'Paulo Myiao',
    birth: '11/05/1991'
  }
];

Router.get('/fighterInfo', (req, res) => {
  res.status(200).send(fighter);
});

Router.post('/addFighter', (req, res) => {
  const newFighter = req.body;
  fighter.push(req.body);
  res.status(200).send(fighter);
});

module.exports = Router;
