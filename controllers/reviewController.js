const Restaurant = require('../models/restaurant');
// const User = require('../models/user');

const createReview = (req, res) => {
  Restaurant.findById(req.params.restId).then(restaurant => {
    restaurant.reviews.push(req.body);
    restaurant.save().then(restaurant => res.redirect(`/restaurants/${restaurant._id}`));
  });
};

const deleteReview = (req, res) => {
  Restaurant.findById(req.params.restId).then(restaurant => {
    restaurant.reviews.id(req.params.reviewId).remove();
    console.log('Review deleted', req.params);
    restaurant.save().then(() => res.redirect(`/restaurants/${req.params.restId}`));
  });
};

module.exports = {
  create: createReview,
  delete: deleteReview
};
