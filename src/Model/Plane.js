const mongoose = require('mongoose');
   
const planeSheme = new mongoose.Schema({

    firstName: {
        type: String,
        required:true
    },
    lastName: {
        type: String,
        required:true
    },
    email: {
        type: String,
        required:true,
        lowercase:true
    },
   
    serviceTipe: {
        type: String,
        required:true
    },
    country: {
        type: String,
        required:true
    },
    celPhone: {
        type: Number,
        required:true
    },
}, { timestamps:true })


const plane = mongoose.model('Plane', planeSheme);

module.exports = plane;

