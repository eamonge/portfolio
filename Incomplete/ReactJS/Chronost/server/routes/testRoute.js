const router = require('express').Router();
const auth = require('../authentication/Authentication');
var Test = require('../server/models/Test');

router.post("/", auth, async (req, res) => {
    (new Test({
        "string1": req.body.string1
    }))
        .save()
        .then((test) => {
            res.send(test)
        })
        .catch((error) => console.log(error))
});

module.exports = router;