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

module.exports = mongoose.model('Restaurant', restaurantSchema);
