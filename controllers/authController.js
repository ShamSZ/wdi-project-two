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

const loginUserForm = (req, res) => {
  res.render('auth/login');
};

const loginUser = (req, res) => {
  User.findOne({ email: req.body.email}).then( user => {
    if(!user){
      res.redirect('/register');
    } else {
      console.log('Logging user in');
      req.session.userId = user._id;
      res.redirect('/');
    }
  });
};

module.exports = {
  registerForm: registerUserForm,
  registerUser: registerUser,
  loginForm: loginUserForm,
  loginUser: loginUser
};
