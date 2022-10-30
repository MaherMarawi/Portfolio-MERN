const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const passwordsSchema = new Schema({
    kind: {
        type: String
    },
    username: {
        type: String
    },
    pass: {
        type: String
    },
    status: {
        type: Boolean,
        default: true
    }

}, { timestamps: true })

const Passwords = mongoose.model('Password', passwordsSchema)

module.exports = Passwords