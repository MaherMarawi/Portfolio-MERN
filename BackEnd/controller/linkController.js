const Link = require('../model/linkSchema')


const postLink = (req, res) => {
    const link = new Link(req.body)
    link.save()
        .then(response => {res.status(200).send(response)})
        .catch(err => console.log(err))
}

const getLink = (req, res) => {
    Link.find()
    .then(response => {res.status(200).send(response)})
    .catch(err => console.log(err))
}

const updateLink = (req, res) => {
    Link.findByIdAndUpdate(req.params.id, req.body, {useFindAndModify:false}
        )
        .then(response => {res.status(200).send(response)})
        .catch(err => console.log(err))
}

const deleteLink = (req, res) => {
    Link.findByIdAndDelete(req.params.id)
        .then(response => {res.status(200).send(response)})
        .catch(err => console.log(err))
}

module.exports = {
    getLink,
    updateLink,
    postLink,
    deleteLink
}