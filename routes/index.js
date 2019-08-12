module.exports = app => {
  app.use(require('./login.route.js'))
  app.use(require('./access.route.js'))
  app.use(require('./fighter.route.js'))
  app.use(require('./profile.route.js'))
}
