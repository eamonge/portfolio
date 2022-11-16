const express = require('express');
const cors = require('cors');
require('dotenv').config();
var cookieParser = require('cookie-parser');

//Establishes connection to mongodb
const mongoose = require('./server/mongoose');
//Instances server application and establishes PORT number
var app = express();

var PORT = 5000;

//Setting server JSON and CORS permissions
app.use(express.json());
app.use(cors());
app.use(cookieParser());

//Setting up routes

//log in Route
app.use('/auth', require('./routes/userRoute'));

//Handover CRUDs
app.use('/handovers', require('./routes/handoverRoute'));

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}!`)
});