const cookieParser = require('cookie-parser');
const express = require('express');
const cors = require('cors');
require('dotenv').config();

//Instances server application and establishes PORT number
var app = express();
app.use(
    cors({
        origin: ["http://localhost:3000"],
        credentials: true
    })
);

app.use(express.json());
app.use(cookieParser());

//Establishes connection to mongodb
const mongoose = require('./server/mongoose');

//Setting up routes

//log in Route
app.use('/auth', require('./routes/userRoute'));

//Handover CRUDs
app.use('/handovers', require('./routes/handoverRoute'));

//Test Route
app.use('/test', require('./routes/testRoute'));

//Test Route
app.use('/timeout', require('./routes/timeoutRoute'));

var PORT = 5000;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}!`)
});