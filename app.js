const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const session = require('express-session');
const app = express();
const router = require('./config/routes');
const env = require('./config/environment');

mongoose.connect(env.dbUri, { useNewUrlParser: true });

app.use(methodOverride('_method'));
app.use(express.static('public'));
app.use(expressLayouts);
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(session({ secret: 'Yum!', resave: false, saveUninitialized: false }));

app.use(router);

app.listen(env.port, () => console.log(`Up and running on port ${env.port}`));
