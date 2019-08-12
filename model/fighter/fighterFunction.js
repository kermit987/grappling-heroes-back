const { Fighter } = require('./fighterSchema')

const createFighter = (name, lastname, birth, biography) => {
  const newFighter = new Fighter({
    name,
    lastname,
    birth,
    biography
  })
  newFighter.save().then(err, product) {
    if (err) {
      throw new Error('Failed save() in createFighter')
    } else {
      return true
    }
  }
}

const getFighter = () => {
  find({}, (err, fighters) => {
    if (err) {
      throw new Error('Failed find() in getFighter')
    } else {
      return fighters
    }
  })
}

const getFighterByName = name => {
  find({ name }, (err, fighter) => {
    if (err) {
      throw new Error('Failed find() in getFighterByName')
    } else {
      return fighter
    }
  })
}

module.exports = {
  createFighter,
  getFighter,
  getFighterByName
}
