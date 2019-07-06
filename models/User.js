const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
  googleID: String
});

module.exports = User = mongoose.model('users', userSchema);