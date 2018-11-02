const User = require('../models/user');

const registerUserForm = (req, res) => {
  res.render('auth/register');
};

const registerUser = (req, res) => {
  User.create(req.body).then(user => {
    console.log('User registered:', user);
    res.redirect('/login');
  });
};

const loginUserForm = (req, res) => {
  res.render('auth/login');
};

const loginUser = (req, res) => {
  User.findOne({ email: req.body.email}).then( user => {
    if(!user){
      res.render('auth/failedLogin');
    } else {
      if (req.body.password === user.password){
        console.log('Correct password. Logging user in...');
        req.session.userId = user._id;
        res.redirect('/');
      } else {
        res.render('auth/failedLogin');
      }
    }
  });
};

const logout = (req, res) => {
  req.session.regenerate(() => res.redirect('/'));
};

module.exports = {
  registerForm: registerUserForm,
  registerUser: registerUser,
  loginForm: loginUserForm,
  loginUser: loginUser,
  logout: logout
};
