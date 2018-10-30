const User = require('../models/user');

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

const logout = (req, res) => {
  req.session.regenerate(() => res.redirect('/'));
};

const profilePage = (req, res) => {
  res.render('pages/profile');
};

module.exports = {
  registerForm: registerUserForm,
  registerUser: registerUser,
  loginForm: loginUserForm,
  loginUser: loginUser,
  logout: logout,
  profile: profilePage
};
