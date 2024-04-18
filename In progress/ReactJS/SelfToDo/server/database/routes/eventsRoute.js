const router = require('express').Router();
const axios = require('axios');
var Events = require('../models/Events');

//Get events from database
router.get("/", async (req, res) => {
    Events.find({})
        .then(events => res.send(events))
        .catch((error) => console.log(error))
});

router.post("/", async (req, res) => {
    (new Events({
        "title": req.body.title,
        "startDate": req.body.startDate
    }))
        .save()
        .then((event) => {
            res.send(event)
        })
        .catch((error) => console.log(error))
})

module.exports = router;