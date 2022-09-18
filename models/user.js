
const mongoose = require('mongoose');
const crypto = require('crypto');
const { v4: uuidv4 } = require('uuid');


const userSchema = new mongoose.Schema({
    email: { 
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    
    encry_password: {
        type: String,
        required: true,
        // trim: true
    },
    salt: String,
    username: {
        type: String,
        required: true,
        unique: true,
        maxLength: 32,
    },
    
    upcoming_appointments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'appointments'
        }
    ],

    role: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true
});

userSchema
    .virtual("password")
    .set(function(password){
        this._password = password;
        this.salt = uuidv4();
        this.encry_password = this.securePassword(password);
    })
    .get(function(){
        return this._password;
    })

userSchema.methods = {

    authenticate: function(plainPassword){
        return this.securePassword(plainPassword) === this.encry_password
    },

    securePassword: function(plainPassword){
        if(!plainPassword) return "";
        try {
            return crypto
            .createHmac('sha256', this.salt)
            .update(plainPassword)
            .digest('hex');
        } catch (err) {
            return "";
        }
    }
}

const User = mongoose.model('User', userSchema);

module.exports = User;