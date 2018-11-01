const User = require('../models/user');

const showUser = (req, res) => {
  User.findById(req.params.userId)
    .populate('addedRestaurants addedReviews')
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

const updateUser = (req, res) => {
  if (req.body.oldPassword === res.locals.currentUser.password){
    User.findByIdAndUpdate(req.params.userId, req.body)
      .then(user => {
        res.redirect(`/users/${user._id}`);
      });
  }
};



module.exports = {
  show: showUser,
  edit: editUser,
  update: updateUser
};
