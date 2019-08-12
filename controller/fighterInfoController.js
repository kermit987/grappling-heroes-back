const {
  createFighter,
  getFighter,
  getFighterByName
} = require('/model/fighter/fighterFunction.js')

const getFighter = (req, res) => {}

const getFighterByName = (req, res) => {
  const name = req.body.name

  const fighter = getFighterByName(name)
  res.status(200).send(fighter)
}

const createFighter = (req, res) => {}

module.exports = {
  fighterInfoController
}
