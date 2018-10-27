const mongoose = require('mongoose');

const restaurantSchema = mongoose.Schema({
  name: String,
  rating: Number,
  price: Number,
  description: String,
  cuisine: String,
  image: String,
  address: String
});

const restaurantModel = mongoose.model('Restaurant', restaurantSchema);

module.exports = restaurantModel;
