module.exports = app => {
  app.use(require('./login.js'))
  app.use(require('./accessGranted.js'))
  app.use(require('./fighter.js'))
  app.use(require('./profile.js'))
}
