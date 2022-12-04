const router = require('express').Router();
var Handover = require('../server/models/Handovers');
const auth = require('../authentication/Authentication');

//Get all Handover lists
router.get('/', (req, res) => {
    //GET Placeholder
    Handover.find({})
        .then(handover => res.send(handover))
        .catch((error) => console.log(`Error is: ${error}`));
});

//Get Handover per ID
router.get('/:id', (req, res) => {
    Handover.findById({
        '_id': req.params.id
    })
        .then(handover => res.send(handover))
        .catch((error) => console.log(error))
});

//Create new handover file
router.post('/', auth, async (req, res) => {
    //POST placeholder
    (new Handover({
        "sr": req.body.sr,
        "severity": req.body.severity,
        "type": req.body.type,
        "handover_justification": req.body.handover_justification,
        "next_steps": req.body.next_steps,
        "subteam": req.body.subteam
    }))
    .save()
    .then((handover) => {
        res.send(handover)
    })
    .catch((error) => console.log(error))
});

//Update handover file
router.patch('/:id', (req, res) => {
    //PATCH placeholder
    Handover.findByIdAndUpdate({
        '_id' : req.params.id
    }, {
        $set: req.body
    })
    .then((handover) => res.send(handover))
    .catch((error) => console.log(error))
});

//Delete handover file
router.delete('/:id', (req, res) => {
    //DELETE placeholder
    Handover.findByIdAndDelete(req.params.id)
        .then((handover) => res.send(handover))
        .catch((error) => console.log(error))
})

module.exports = router;