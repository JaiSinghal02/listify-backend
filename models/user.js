const mongoose = require('mongoose')

const User = mongoose.model('User',new mongoose.Schema({
    userName:{
        type: String,
        trim: true,
        minlength: 3
    },
    email:{
        type: String,
    },
    mobileNumber:{
        type: Number,
    },
    address:{
        type: String
    }
}))

module.exports = User