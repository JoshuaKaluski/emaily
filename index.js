const express = require("express");
const mongoose = require('mongoose');
const {mongoURI} = require('./config/keys');
require('./services/passport');
require('./models/User');

const PORT = process.env.PORT || 5000;

mongoose.connect(mongoURI);

const app = express();

//Define routes
app.use('/auth', require('./routes/auth'));

app.listen(PORT);