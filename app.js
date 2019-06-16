const express = require('express')
const flash = require('connect-flash')
const bodyParser = require('body-parser')
const passport = require('passport')
var session = require('express-session')
const { Router } = require('./routes')

const app = express()

app.use(
  //dunno what's the purpose
  session({
    cookie: { maxAge: 60000 },
    secret: 'woot',
    resave: false,
    saveUninitialized: false
  })
)
app.use(flash())

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization' //https://stackoverflow.com/questions/44245588/how-to-send-authorization-header-with-axios
  )
  res.header(
    'Access-Control-Allow-Methods',
    'GET,PUT,POST,DELETE,PATCH,OPTIONS'
  )
  next()
})

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(passport.initialize())
app.use(passport.session())
app.use(Router)

app.listen(3000, () => {
  console.log('app running on port 3000 ')
})

module.export = app
