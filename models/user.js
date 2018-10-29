const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  username: String,
  email: { type: String, unique: true },
  password: String,
  profilePic: String
});

module.exports = mongoose.model('User', userSchema);
