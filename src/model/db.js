const mongoose = require('mongoose')
const config = require('../../config/config') //why does it work

const database =
  'mongodb://' + config.db.user + ':' + config.db.password + config.db.host

const db = mongoose.connect(database)

//doesn't work

// db.on('error', () => {
//   throw new Error('Connection to database failed')
// })

module.exports = {
  db
}
