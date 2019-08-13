const express = require('express')
// const {
//   createFighter,
//   getFighter,
//   getFighterByName
// } = require('model/fighter/fighterModel')

const {
  createFighter,
  getFighter,
  getFighterByName
} = require('model/fighter/fighterModel')

const getFighterController = (req, res) => {
  try {
    const fighters = getFighter()
    res.status(200).send(fighters)
  } catch {
    res.status(500).send()
  }
}

const getFighterByNameController = (req, res) => {
  const name = req.body.name

  try {
    const fighter = getFighterByName(name)
    res.status(200).send(fighter)
  } catch {
    res.status(500).send()
  }
}

const createFighterController = (req, res) => {
  const { name, lastname, birth, biography } = req.body

  try {
    const result = createFighter(name, lastname, birth, biography)
    res.status(200).send()
  } catch {
    res.status(500)
  }
}

module.exports = {
  getFighterController,
  getFighterByNameController,
  createFighterController
}
