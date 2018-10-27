const express = require('express');
const env = require('./config/environment');
const app = express();
const restController = require('./controllers/restController');

app.set('view engine', 'ejs');

app.get('/', restController.home);

app.listen(env.port, ()=>console.log(`Up and running on port ${env.port}`));
