const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    passwordHash: {
        type: String,
        required: true
    },
    status: {
        type: String
    },
    role: {
        type: String,
        required: true
    },
    statusModified: {
        type: Date
    }
});

const User = new mongoose.model('User', userSchema); 

module.exports = User;