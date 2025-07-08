const express = require('express');
const app = express();
const cors = require('cors');

//Router JS scripts
const animeRouter = require('./routes/animeRouter');

app.use(cors());
app.use(express.json());
PORT = 5000;

//Setting up routes
app.use("/anime", animeRouter);

app.listen(PORT, () => {
    console.log(`Node server listening on ${PORT}!`);
})