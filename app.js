const express = require('express')
const flash = require('connect-flash')
const bodyParser = require('body-parser')
const passport = require('passport')
const session = require('express-session')
const dotenv = require('dotenv').config()
const router = require('./src/routes')

const app = express()

const PORT = process.env.PORT || 3002

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
  res.header('Access-Control-Allow-Credentials', true) //Otherwise there is an error while push on HEROKU
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

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(passport.initialize())
app.use(passport.session())

router(app)

app.listen(PORT, () => {
  console.log('app running on port ', PORT)
})

module.export = app
