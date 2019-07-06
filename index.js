const express = require("express");
require('./services/passport');
const connectDB = require('./config/db');

const PORT = process.env.PORT || 5000;

const app = express();

connectDB();

//Define routes
app.use('/auth', require('./routes/auth'));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));