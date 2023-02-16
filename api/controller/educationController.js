const Education = require('../model/educationSchema')



const getAllEducation = (req, res) => {
    Education.find()
    .then(response => {res.status(200).send(response)})
    .catch(err => console.log(err))
}



const getEducation = (req, res) => {
    Education.findById(req.params.id)
    .then(response => {res.status(200).send(response)})
    .catch(err => console.log(err))
}

const postEducation = (req, res) => {
    const education = new Education(req.body)
    education.save()
        .then(response => {res.status(200).send(response)})
        .catch(err => console.log(err))
}

const updateEducation = (req, res) => {
    Education.findByIdAndUpdate(req.params.id, req.body)
        .then(response => {res.status(200).send(response)})
        .catch(err => console.log(err))
}

const deleteEducation = (req, res) => {
    Education.findByIdAndDelete(req.params.id)
        .then(response => {res.status(200).send(response)})
        .catch(err => console.log(err))
}

module.exports = {
    getAllEducation,
    getEducation,
    postEducation,
    updateEducation,
    deleteEducation
}