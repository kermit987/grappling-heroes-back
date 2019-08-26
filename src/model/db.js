const mongoose = require('mongoose')
const config = require('../../config/config') //why does it work

const closeDatabase = done => {
  mongoose.disconnect(done)
}
const database =
  'mongodb://' + config.db.user + ':' + config.db.password + config.db.host

console.log('value of database ', database)
mongoose.connect(database)

const db = mongoose.connection

db.on('error', () => {
  throw new Error('Connection to database failed')
})

db.once('open', function() {
  console.log('Database connected')
})

module.exports = {
  db,
  closeDatabase
}
