const { Fighter } = require('./fighterSchema')

const createFighter = (name, lastname, birth, biography) => {
  try {
    const newFighter = new Fighter({
      name,
      lastname,
      birth,
      biography
    })
    new Fighter.save()
  } catch (e) {
    console.log('save() failed in createFighter ', e)
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
