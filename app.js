const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const app = express();

const env = require('./config/environment');
const restController = require('./controllers/restController');

app.use(express.static('public'));
app.use(expressLayouts);

app.set('view engine', 'ejs');

app.get('/', restController.home);
app.get('/about', restController.about);
app.get('/restaurants', restController.index);

app.listen(env.port, () => console.log(`Up and running on port ${env.port}`));
