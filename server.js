const express = require('express')
const flash = require('connect-flash')
const bodyParser = require('body-parser')
const passport = require('passport')
const { Router } = require('./routes')

const app = express()
app.use(flash())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(passport.initialize())
app.use(passport.session())
app.use(Router)


app.listen(3000, () => { console.log('app running on port 3000 ') })

module.export = app
