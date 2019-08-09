const mongoose = require('mongoose')

mongoose.connect('database')

const db = mongoose.connection

db.on('error', () => {
  throw new Error('Connection to database failed')
})

export default db
