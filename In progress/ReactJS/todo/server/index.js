require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());

var PORT = process.env.PORT;
var origin = process.env.REQUEST_ORIGIN;

app.listen(PORT, () => {
    console.log(`backEnd server running on port ${PORT}`)
})