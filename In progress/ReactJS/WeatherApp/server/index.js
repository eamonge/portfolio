require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
var origin = process.env.FE_ORIGIN;

var app = express();
app.use(cors({
    origin: [`${origin}`],
    credentials: true
}));
app.set('trust proxy', true);

//Calling routes
var weatherRoutes = require('./routes/weatherRoutes');

app.use('/weather', weatherRoutes);

app.listen(process.env.PORT, () => {
    console.log('Listening on port:', process.env.PORT);
})