const mongoose = require('mongoose')
const config = require('../../config/config') //why does it work

const database =
  'mongodb://' + config.db.user + ':' + config.db.password + config.db.host

mongoose.connect(database)

const db = mongoose.connection

db.on('error', () => {
  throw new Error('Connection to database failed')
})

module.exports = {
  db
}
