const mongoose = require('mongoose');
const {mongoURI} = require('../config/keys');

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true
    });

    console.log('MongoDB connected...');
  } catch (e) {
    console.error(e.message);

    //Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;