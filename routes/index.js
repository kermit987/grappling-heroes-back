module.exports = app => {
  app.use(require('./login.js'));
  app.use(require('./accessGranted.js'));
  app.use(require('./poupoune.js'));
  app.use(require('./fighterInfo.js'));
};
