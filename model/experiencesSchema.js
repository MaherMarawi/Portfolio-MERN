const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const experiencesSchema = new Schema({
    name: {
        type: String
    },
    grade: {
        type: Number
    }

}, { timestamps: true })

const Experience = mongoose.model('Experience', experiencesSchema)

module.exports = Experience