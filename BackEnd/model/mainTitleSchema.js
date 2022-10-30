const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const mainTitleSchema = new Schema({
    mainTitleText: {
        type: String
    }

}, { timestamps: true })

const MainTitle = mongoose.model('MainTitle', mainTitleSchema)

module.exports = MainTitle