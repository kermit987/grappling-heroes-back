module.exports = app => {
  app.use(require('./login.route.js.js'))
  app.use(require('./access.route.js.js'))
  app.use(require('./fighter.route.js.js'))
  app.use(require('./profile.route.js.js'))
}
