const MainTitle = require('../model/mainTitleSchema')
const key = process.env.SecretKey

const getMainTitles = (req, res) => {
    MainTitle.find()
    .then(response => {res.status(200).send(response)})
    .catch(err => console.log(err))
}

const getMainTitle = (req, res) => {
    MainTitle.findById(req.params.id)
    .then(response => {res.status(200).send(response)})
    .catch(err => console.log(err))
}

const postMainTitle = (req, res) => {
    const mainTitle = new MainTitle(req.body)
    mainTitle.save()
        .then(response => {res.status(200).send(response)})
        .catch(err => console.log(err))
}

const updateMainTitle = (req, res) => {
    MainTitle.findByIdAndUpdate(req.params.id, req.body, {useFindAndModify:false}
        )
        .then(response => {res.status(200).send(response)})
        .catch(err => console.log(err))
}

const deleteMainTitle = (req, res) => {
    MainTitle.findByIdAndDelete(req.params.id)
        .then(response => {res.status(200).send(response)})
        .catch(err => console.log(err))
}

module.exports = {
    getMainTitles,
    getMainTitle,
    postMainTitle,
    updateMainTitle,
    deleteMainTitle
}
