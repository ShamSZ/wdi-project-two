const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

const env = require('./config/environment');
const restController = require('./controllers/restController');

mongoose.connect(env.dbUri, { useNewUrlParser: true });
app.use(express.static('public'));
app.use(expressLayouts);
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.get('/', restController.home);
app.get('/about', restController.about);
app.get('/restaurants', restController.index);
app.post('/restaurants', restController.create);
app.get('/restaurants/new', restController.new);
app.get('/restaurants/:restId', restController.show);

// need to create edit & update routes

// authentication - login/register routes
// models for user
// login/register forms/pages
app.listen(env.port, () => console.log(`Up and running on port ${env.port}`));
