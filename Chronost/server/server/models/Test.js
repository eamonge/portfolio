const mongoose = require('mongoose');

const testSchema = new mongoose.Schema({
    string1: {
        type: String,
        required: true
    }
});

const Test = new mongoose.model('Test', testSchema);

module.exports = Test;