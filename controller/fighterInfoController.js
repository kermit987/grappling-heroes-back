const {
  createFighter,
  getFighter,
  getFighterByName
} = require('/model/fighter/fighterFunction.js')

const getFighter = (req, res) => {
  const fighters = getFighter()

  res.status(200).send(fighters)
}

const getFighterByName = (req, res) => {
  const name = req.body.name

  const fighter = getFighterByName(name)
  res.status(200).send(fighter)
}

const createFighter = (req, res) => {
  const { name, lastname, birth, biography } = req.body

  const result = createFighter(name, lastname, birth, biography)
  if (result) {
    res.status(200).send()
  } else {
    res.status(500).send()
  }
}

module.exports = {
  fighterInfoController
}
