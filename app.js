const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');
const override = require('method-override');
const path = require('path');
const pug = require('pug');

const app = express();

// models
const { User, Office } = require('./db').models;

// middleware
app.use('/vendor', express.static(path.join(__dirname, 'node_modules')));
app.use('/public', express.static(path.join(__dirname, 'public')));

// app.use(express.static('public')); // serve up the static files in /public
app.use(bodyParser.urlencoded({ extended: false }));
app.use(override('_method')); // use the _method param on the url
app.use(morgan('dev'));

// pug setup
app.set('views', './views'); // set 'views' to specify the templates dir
app.set('view engine', 'pug'); // set 'view engine' to specify pug
// app.disable('view cache'); // disable view caching...

// set locals
let config = process.env;
try {
  config = require('./env.json');
}
catch (ex) {}

app.use( (req, res, next) => {
  res.locals.GOOGLE_API_KEY = config.GOOGLE_API_KEY;
  next();
});

app.use( (req, res, next) => {
  return Promise.all([
    User.findAll(),
    Office.findAll({ include: [{ model: User }] }),
  ])
    .then(([ users, offices ]) => {
      res.locals.users = users;
      res.locals.offices = offices;
      next();
    })
    .catch(next);
});

// handle the root route
app.get('/', (req, res, next) => {
  res.render('index');
});

// handle routes
app.use('/offices', require('./routes/offices'));
app.use('/users', require('./routes/users'));

// handle errors
app.use( (err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).send(err.message);
});

// exports
module.exports = app;
