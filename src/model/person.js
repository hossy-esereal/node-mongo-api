'use strict';

const mongoose = require('mongoose');
const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    zipCode: {
        type: Number,
        min: [100000, 'Zip code too short'],
    },
});


module.exports = mongoose.model('Person', personSchema);
