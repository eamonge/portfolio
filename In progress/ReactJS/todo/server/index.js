require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// Calling backEnd routes
var testRoute = require('./routes/testRoutes');
var userRoute = require('./routes/userRoutes');
const cookieParser = require('cookie-parser');

var app = express();
app.use(bodyParser.json());

var PORT = process.env.PORT;
var origin = process.env.REQUEST_ORIGIN;

app.use(cors({
    origin: [`${origin}`],
    credentials: true
}));

app.use(cookieParser());

app.use('/test', testRoute);
app.use('/auth', userRoute);

app.listen(PORT, () => {
    console.log(`backEnd server running on port ${PORT}`)
})


/* 

PORT = 5000
REQUEST_ORIGIN = http://localhost:5173
DB_USERNAME = admincito
DB_SERVER = localhost
DB_PORT = 1433
DB_PWD = (Faj9WGBwpl9?s^1;dPv+0



*/