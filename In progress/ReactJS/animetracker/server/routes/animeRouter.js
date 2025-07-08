const router = require('express').Router();
const axios = require('axios');

router.get("/", async(req, res) => {
    axios.get("https://kitsu.io/api/edge/anime")
    .then(response => res.json(response.data))
    .catch(err => res.json(err))
    .finally(function () {
        //always executed
    })
});

module.exports = router;