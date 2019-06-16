const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy

const privateKey = 'tomato'

passport.serializeUser(function(user, done) {
  done(null, user)
})

passport.deserializeUser(function(id, done) {
  done(null, id)
})

// passport local need to be username and password
passport.use(
  new LocalStrategy(function(username, password, done) {
    if (username !== 'steven') {
      return done(null, false, { message: 'Incorrect username' })
    } else if (password !== 'epitech') {
      return done(null, false, { message: 'Incorrect password' })
    } else {
      return done(null, { username, password })
    }
  })
)

module.exports = {
  passport
}
