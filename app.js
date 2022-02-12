const express = require('express');
const app = express();

app.use(express.json());

//import route
const user = require('./routes/userRoute');

app.use("/api", user);

module.exports = app
