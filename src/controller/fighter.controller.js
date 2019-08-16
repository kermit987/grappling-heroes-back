const express = require('express');
const {
  createFighter,
  getFighter,
  getFighterByName
} = require('model/fighter/fighterModel');

const getFighterController = async (req, res) => {
  try {
    const fighters = await getFighter();
    console.log('fighters from controller ', fighters);
    res.status(200).send(fighters);
  } catch {
    res.status(500).send();
  }
};

const getFighterByNameController = async (req, res) => {
  const name = req.body.name;

  try {
    const fighter = await getFighterByName(name);
    res.status(200).send(fighter);
  } catch {
    res.status(500).send();
  }
};

const createFighterController = async (req, res) => {
  const { name, lastname, birth, biography } = req.body;

  try {
    const result = await createFighter(name, lastname, birth, biography);
    res.status(200).send();
  } catch {
    res.status(500);
  }
};

module.exports = {
  getFighterController,
  getFighterByNameController,
  createFighterController
};
