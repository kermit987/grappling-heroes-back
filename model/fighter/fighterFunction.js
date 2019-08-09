const Fighter = require('./fighterSchema')

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

export default createFighter
