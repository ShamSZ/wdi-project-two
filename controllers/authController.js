const User = require('../models/user');

// all auth routes here
const registerUserForm = (req, res) => {
  res.render('auth/register');
};

const registerUser = (req, res) => {
  User.create(req.body).then(user => {
    console.log('User registered:', user);
    res.redirect('/');
  });
};

module.exports = {
  registerForm: registerUserForm,
  registerUser: registerUser
};
