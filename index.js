const express = require("express");
require('./services/passport');

const PORT = process.env.PORT || 5000;

const app = express();

//Define routes
app.use('/auth', require('./routes/auth'));

app.listen(PORT);