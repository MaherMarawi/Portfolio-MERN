const User = require('../model/userSchema')

const getUsers = (req, res) => {
    User.find()
    .then(response => {res.status(200).send(response)})
    .catch(err => console.log(err))
}

const getUser = (req, res) => {
    User.findById(req.params.id)
    .then(response => {res.status(200).send(response)})
    .catch(err => console.log(err))
}

const postUser = (req, res) => {
    console.log(req.body)
    const user = new User(req.body)
    user.save()
        .then(response => {res.status(200).send(response)})
        .catch(err => console.log(err))
}

const updateUser = (req, res) => {
    console.log(req.body)
    User.findByIdAndUpdate(req.params.id, req.body)
        .then(response => {res.status(200).send(response)})
        .catch(err => console.log(err))
}

const deleteUser = (req, res) => {
    User.findByIdAndDelete(req.params.id)
        .then(response => {res.status(200).send(response)})
        .catch(err => console.log(err))
}

module.exports = {
    getUsers,
    getUser,
    postUser,
    updateUser,
    deleteUser
}