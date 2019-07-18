const express = require('express');

// const Router = (module.exports = express.Router());
const Router = express.Router();

Router.get('/fighterInfo', (req, res) => {
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
  res.status(200).send(fighter);
});

module.exports = Router;
