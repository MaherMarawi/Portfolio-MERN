const Experience = require('../model/experiencesSchema')



const getExperiences = (req, res) => {
    Experience.find()
    .then(response => {res.status(200).send(response)})
    .catch(err => console.log(err))
}



const getExperience = (req, res) => {
    Experience.findById(req.params.id)
    .then(response => {res.status(200).send(response)})
    .catch(err => console.log(err))
}

const postExperience = (req, res) => {
    const experience = new Experience(req.body)
    experience.save()
        .then(response => {res.status(200).send(response)})
        .catch(err => console.log(err))
}

const updateExperience = (req, res) => {
    Experience.findByIdAndUpdate(req.params.id, req.body)
        .then(response => {res.status(200).send(response)})
        .catch(err => console.log(err))
}

const deleteExperience = (req, res) => {
    Experience.findByIdAndDelete(req.params.id)
        .then(response => {res.status(200).send(response)})
        .catch(err => console.log(err))
}

module.exports = {
    getExperiences,
    getExperience,
    postExperience,
    updateExperience,
    deleteExperience
}