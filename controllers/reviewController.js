const Restaurant = require('../models/restaurant');
// const User = require('../models/user');

const createReview = (req, res) => {
  Restaurant.findById(req.params.restId).then(restaurant => {
    restaurant.reviews.push(req.body);
    restaurant.save().then(restaurant => res.redirect(`/restaurants/${restaurant._id}`));
  });
};

module.exports = {
  create: createReview
};
