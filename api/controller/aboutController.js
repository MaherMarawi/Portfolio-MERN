const About = require('../model/aboutSchema')
const Pass = require('../model/passSchema')
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
    console.log(req.body)
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

//--------------------------------------------------------------------

const getPass = (req, res) => {
    Pass.findById(req.params.id)
    .then(response => {res.status(200).send(response)})
    .catch(err => console.log(err))
}
const postPass = (req, res) => {
    const pass = new Pass(req.body)
    pass.save()
        .then(response => {res.status(200).send(response)})
        .catch(err => console.log(err))
}
const updatePass = (req, res) => {
    console.log(req.body)
    Pass.findByIdAndUpdate(req.params.id, req.body, {useFindAndModify:false}
        )
        .then(response => {res.status(200).send(response)})
        .catch(err => console.log(err))
}

module.exports = {
    getAbouts,
    getAbout,
    postAbout,
    updateAbout,
    deleteAbout,
    getPass,
    postPass,
    updatePass
}