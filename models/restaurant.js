const mongoose = require('mongoose');

const restaurantSchema = mongoose.Schema({
  name: String,
  price: { type: Number, min: 1, max: 4 },
  description: String,
  cuisine: String,
  image: String,
  address: String,
  restAuthor: { type: mongoose.Schema.ObjectId, ref: 'User'},
  reviews: [{
    reviewAuthor: { type: mongoose.Schema.ObjectId, ref: 'User'},
    comment: String,
    rating: Number,
    createdAt: { type: String }
  }]
});

restaurantSchema.virtual('averageRating')
  .get(function() {
    const avgRating = this.reviews.reduce((total, review) => total + review.rating, 0) / this.reviews.length;
    if (this.reviews.length > 0){
      return Math.round(avgRating);
    } else {
      return 'None';
    }
  });

restaurantSchema.set('toJSON', {
  virtuals: true
});


module.exports = mongoose.model('Restaurant', restaurantSchema);
