const mongoose = require('mongoose');

const restaurantSchema = mongoose.Schema({
  name: String,
  rating: Number,
  price: { type: Number, min: 1, max: 4 },
  description: String,
  cuisine: String,
  image: String,
  address: String
});

module.exports = mongoose.model('Restaurant', restaurantSchema);
