const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const linkSchema = new Schema({
    link: {
        type: String
    }

}, { timestamps: true })

const Link = mongoose.model('Link', linkSchema)

module.exports = Link