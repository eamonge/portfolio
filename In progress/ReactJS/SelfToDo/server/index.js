require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('./database/mongoose');

const eventRoute = require('./database/routes/eventsRoute');

var app = express();

var PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

//Set up routes
app.use("/events", eventRoute);

app.use("/addEvent", eventRoute);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}!`);
});