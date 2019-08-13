module.exports = app => {
  app.use(require('./login.route'))
  app.use(require('./access.route'))
  app.use(require('./fighter.route'))
  app.use(require('./profile.route'))
}
