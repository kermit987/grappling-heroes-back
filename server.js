const express = require('express');
const flash = require('connect-flash');
const bodyParser = require('body-parser');
const passport = require('passport');
var session = require('express-session');
const { Router } = require('./routes');

const app = express();
app.use(
  session({
    cookie: { maxAge: 60000 },
    secret: 'woot',
    resave: false,
    saveUninitialized: false
  })
);
app.use(flash());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());
app.use(Router);

app.listen(3000, () => {
  console.log('app running on port 3000 ');
});

module.export = app;
