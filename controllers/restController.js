const Restaurant = require('../models/restaurant');
const home = (req, res) => res.render('pages/home');
const about = (req, res) => res.render('pages/about');
const indexRest = (req, res) => {
  Restaurant.find().then(restaurant => {
    res.render('restaurants/index', {restaurant: restaurant});
  });
};

module.exports = {
  home: home,
  about: about,
  index: indexRest
};
