const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const educationsSchema = new Schema({
    name: {
        type: String
    },
    timeline: {
        type: String
    },
    place: {
        type: String
    },
    description: {
        type: String
    },

}, { timestamps: true })

const Education = mongoose.model('Education', educationsSchema)

module.exports = Education