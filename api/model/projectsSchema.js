const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const projectSchema = new Schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    url: {
        type: String
    },
    usedFramework: {
        type: String
    },
    projectImage: {
        type: String
    },
    codeUrl: {
        type: String
    }

}, { timestamps: true })

const Project = mongoose.model('Project', projectSchema)

module.exports = Project