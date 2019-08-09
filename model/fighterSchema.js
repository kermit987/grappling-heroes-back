const mongoose = require('mongoose')

const fighterSchema = new mongoose.schema({
  name: String,
  lastname: String,
  birth: String,
  biography: String
})

export default fighterSchema
