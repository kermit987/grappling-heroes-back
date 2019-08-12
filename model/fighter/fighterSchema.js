const mongoose = require('mongoose')

const fighterSchema = new mongoose.schema({
  name: String,
  lastname: String,
  birth: String,
  biography: String
})

//compiling the schema into a model
const Fighter = mongoose.model('fighters', fighterSchema)

module.exports = {
  Fighter
}
