const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String
    },
    address: {
        type: String
    },
    phoneNumber: {
        type: String
    },
    languages: {
        type: String
    },

}, { timestamps: true })

const User = mongoose.model('User', userSchema)

module.exports = User