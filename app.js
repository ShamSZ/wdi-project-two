const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const session = require('express-session');
const app = express();

const auth = require('./lib/auth');
const env = require('./config/environment');
const restController = require('./controllers/restController');
const authController = require('./controllers/authController');

mongoose.connect(env.dbUri, { useNewUrlParser: true });
app.use(methodOverride('_method'));
app.use(express.static('public'));
app.use(expressLayouts);
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.use(session({ secret: 'Yum!', resave: false, saveUninitialized: false }));
app.use('*', auth.checkAuthStatus);
app.get('/', restController.home);
app.get('/about', restController.about);
app.get('/restaurants', restController.index);
app.post('/restaurants', restController.create);
app.get('/restaurants/new', restController.new);
app.put('/restaurants/:restId', restController.update);
app.get('/restaurants/:restId', restController.show);
app.delete('/restaurants/:restId', restController.delete);
app.get('/restaurants/:restId/edit', restController.edit);

// authentication - login/register routes
app.get('/register', authController.registerForm);
app.post('/register', authController.registerUser);
app.get('/login', authController.loginForm);
app.post('/login', authController.loginUser);

app.listen(env.port, () => console.log(`Up and running on port ${env.port}`));
