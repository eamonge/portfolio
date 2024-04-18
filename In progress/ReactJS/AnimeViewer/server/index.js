const express = require('express');
const app = express();
const cors = require('cors');
const axios = require('axios');

const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

//Set up routes
app.use("/anime", require('./routes/animeRouter'));

//GET request to anime endpoint





app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}!`)
});