const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const passSchema = new Schema({
    pass: {
        type: String
    }

}, { timestamps: true })

const Pass = mongoose.model('Pass', passSchema)

module.exports = Pass