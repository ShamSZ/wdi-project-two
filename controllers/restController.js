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

const newRest = (req, res) => {
  res.render('restaurants/new');
};

const createRest = (req, res) => {
  Restaurant.create(req.body).then(restaurant => {
    console.log('Created a new Restaurant', restaurant);
    res.redirect(`/restaurants/${restaurant._id}`);
  });
};

const editRest = (req, res) => {
  Restaurant.findById(req.params.restId).then(restaurant => {
    res.render('restaurants/edit', restaurant);
  });
};

const updateRest = (req, res) => {
  Restaurant.findByIdAndUpdate(req.params.restId, req.body).then(restaurant => {
    res.redirect(`/restaurants/${restaurant._id}`);
  });
};

const deleteRest = (req, res) => {
  Restaurant.findByIdAndDelete(req.params.restId).then((restaurant) => {
    console.log('Deleted restaurant', restaurant);
    res.redirect('/restaurants');
  });
};

module.exports = {
  home: home,
  about: about,
  index: indexRest,
  show: showRest,
  new: newRest,
  create: createRest,
  edit: editRest,
  update: updateRest,
  delete: deleteRest
};
