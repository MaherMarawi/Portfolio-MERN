const About = require('../model/aboutSchema')
const key = process.env.SecretKey


const getAbouts = (req, res) => {
    About.find()
    .then(response => {res.status(200).send(response)})
    .catch(err => console.log(err))
}



const getAbout = (req, res) => {
    About.findById(req.params.id)
    .then(response => {res.status(200).send(response)})
    .catch(err => console.log(err))
}

const postAbout = (req, res) => {
    const about = new About(req.body)
    about.save()
        .then(response => {res.status(200).send(response)})
        .catch(err => console.log(err))
}

const updateAbout = (req, res) => {
    console.log(req)
    About.findByIdAndUpdate(req.params.id, req.body, {useFindAndModify:false}
        )
        .then(response => {res.status(200).send(response)})
        .catch(err => console.log(err))
}

const deleteAbout = (req, res) => {
    About.findByIdAndDelete(req.params.id)
        .then(response => {res.status(200).send(response)})
        .catch(err => console.log(err))
}

module.exports = {
    getAbouts,
    getAbout,
    postAbout,
    updateAbout,
    deleteAbout
}