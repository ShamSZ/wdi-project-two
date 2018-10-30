const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  username: { type: String, unique: true },
  email: { type: String, unique: true },
  password: String,
  profilePic: String
});

userSchema.virtual('addedRestaurants', {
  ref: 'Restaurant',
  localField: '_id',
  foreignField: 'restAuthor'
});

module.exports = mongoose.model('User', userSchema);
