const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const aboutSchema = new Schema({
    aboutText: {
        type: String
    }

}, { timestamps: true })

const About = mongoose.model('About', aboutSchema)

module.exports = About