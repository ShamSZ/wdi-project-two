const mongoose = require('mongoose');

const restaurantSchema = mongoose.Schema({
  name: String,
  rating: Number,
  price: { type: Number, min: 1, max: 4 },
  description: String,
  cuisine: String,
  image: String,
  address: String,
  reviews: [{
    username: { type: String, required: true },
    comment: String,
    rating: { type: Number, min: 1, max: 5 }
  }]
});

module.exports = mongoose.model('Restaurant', restaurantSchema);
