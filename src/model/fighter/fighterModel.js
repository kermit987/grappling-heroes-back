const { Fighter } = require('./fighterSchema')

const createFighter = (name, lastname, birth, biography) => {
  const newFighter = new Fighter({
    name,
    lastname,
    birth,
    biography
  })
  return new Promise((resolve, reject) => {
    newFighter
      .save()
      .then(fighter => {
        resolve(fighter)
      })
      .catch(err => reject(err))
  })
}

const getFighter = () => {
  return new Promise((resolve, reject) => {
    Fighter.find({})
      .then(fighters => {
        resolve(fighters)
      })
      .catch(err => {
        reject(err)
      })
  })
}

const getFighterByName = name => {
  return new Promise((resolve, reject) => {
    Fighter.find({ name })
      .then(fighter => resolve(fighter))
      .catch(err => reject(err))
  })
}

module.exports = {
  createFighter,
  getFighter,
  getFighterByName
}
