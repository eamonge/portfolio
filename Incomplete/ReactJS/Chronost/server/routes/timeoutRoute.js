const router = require('express').Router();

var Timeout = require('../server/models/Timeouts');

router.post('/', async (req, res) => {
    (new Timeout({
        "title": req.body.title,
        "start": req.body.start,
        "end": req.body.end,
        "email": req.body.email
    }))
        .save()
        .then((timeout) => {
            res.send(timeout)
        })
        .catch((err) => console.log(err))
});

//get non Aggregated
router.get('/nag/:email', (req, res) => {
    Timeout.find({
        'email': req.params.email
    })
        .then(timeout => res.send(timeout))
        .catch((error) => console.log(error));
});

//get Aggregated
router.get('/ag/:email', (req, res) => {
    Timeout.find({
        'email': req.params.email
    })
    Timeout.aggregate(
        [
            {
                $project: {
                    start: { $dateToString: { format: "%d/%m/%Y", date: "$start" } },
                    end: { $dateToString: { format: "%d/%m/%Y", date: "$end" } }
                }
            }
        ]
    )
        .then(timeout => res.send(timeout))
        .catch((error) => console.log(error));
});

module.exports = router;