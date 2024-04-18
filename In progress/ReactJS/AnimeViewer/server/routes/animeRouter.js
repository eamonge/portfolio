const router = require('express').Router();
const axios = require('axios');

//Get anime data
router.get("/", async (req, res) => {
    axios.get('https://api.jikan.moe/v4/anime')
        .then(response => res.json(response.data))
        .catch(err => res.json(err))
        .finally(function () {
          // always executed
        });
});

// router.post();
// router.post();
// router.post();

module.exports = router;