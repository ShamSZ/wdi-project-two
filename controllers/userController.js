const User = require('../models/user');

const showUser = (req, res) => {
  User.findById(req.params.userId)
    .populate('addedRestaurants')
    .then(user => {
      res.render('users/show', user);
    });
};

module.exports = {
  show: showUser
};
