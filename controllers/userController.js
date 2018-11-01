const User = require('../models/user');

const showUser = (req, res) => {
  User.findById(req.params.userId)
    .populate('addedRestaurants')
    .then(user => {
      res.render('users/show', user);
    });
};

const editUser = (req, res) => {
  User.findById(req.params.userId)
    .then(user => {
      res.render('users/edit', user);
    });
};

module.exports = {
  show: showUser,
  edit: editUser
};
