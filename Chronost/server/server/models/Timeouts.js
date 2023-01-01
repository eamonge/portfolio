const mongoose = require('mongoose');

const timeoutSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    start: {
        type: Date,
        required: true
    },
    end: {
        type: Date,
        required: true
    },
    email: {
        type: String
    }
});

const Timeout = new mongoose.model('Timeout', timeoutSchema);

module.exports = Timeout;