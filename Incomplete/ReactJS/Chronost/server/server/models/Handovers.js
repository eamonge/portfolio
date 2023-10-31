const mongoose = require('mongoose');

const handoversSchema = new mongoose.Schema({
    sr: {
        type: String,
        required: true
    },
    severity: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    handover_justification: {
        type: String,
        required: true
    },
    next_steps: {
        type: String, 
        required: true
    },
    subteam: {
        type: String,
        required: true
    }
});

const Handover = new mongoose.model('Handover', handoversSchema);

module.exports = Handover;