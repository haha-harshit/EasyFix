
const mongoose = require('mongoose');
const crypto = require('crypto');
const { v4: uuidv4 } = require('uuid');


const appointmentSchema = new mongoose.Schema({
    title: { 
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    
    agenda: {
        type: String,
        required: true,
        // trim: true
    },
    // salt: String,
    time: {
        required: true,
    },

    guest: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },

    client:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },

}, {
    timestamps: true
});


const Appointments = mongoose.model('Appointments', appointmentSchema);

module.exports = Appointments;