const Restaurant = require('../models/restaurant');

const home = (req, res) => res.render('pages/home');
const about = (req, res) => res.render('pages/about');

const indexRest = (req, res) => {
  Restaurant.find().then(restaurants => {
    res.render('restaurants/index', {restaurants: restaurants});
  });
};

const showRest = (req, res) => {
  Restaurant.findById(req.params.restId).then(restaurant => {
    res.render('restaurants/show', restaurant);
  });
};

module.exports = {
  home: home,
  about: about,
  index: indexRest,
  show: showRest
};
