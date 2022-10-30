const Passwords = require('../model/passwordsSchema')
const key = process.env.SecretKey
const moment = require('moment')

const getPasswords = (req, res) => {
    Passwords.find()
        .then(response => {
            const pss = []
            response.forEach(ps => {
                ps.createdAt = moment(ps.createdAt).format("YYYY-MM-DD HH:mm")
                // const nPs = { id: ps.id, k: ps.kind ? ps.kind : "instagram", u: ps.username, p: ps.pass, n: ps.status, d: moment(ps.createdAt).format("YYYY-MM-DD HH:mm") }
                // pss.push(nPs)
            });
            res.status(200).send(response)
        })
        .catch(err => res.send(err))
}
const postPass = (req, res) => {
    const password = new Passwords(req.body)
    password.save()
        .then(response => { res.status(200).send(response) })
        .catch(err => console.log(err))
}
const deletePass = (req, res) => {
    Passwords.findByIdAndDelete(req.params.id)
        .then(response => { res.status(200).send(response) })
        .catch(err => console.log(err))
}
// const checkPass = (req, res) => {
//     Passwords.findByIdAndUpdate(req.params.id, req.body, { useFindAndModify: false })
//         .then(response => { res.status(200).send(response) })
//         .catch(err => console.log(err))
// }
const checkPass = (req, res) => {
    Passwords.findByIdAndUpdate(req.params.id, {status: false} )
    .then(response => res.send(response))
    .catch(err => console.log(err))
}

module.exports = {
    getPasswords,
    postPass,
    deletePass,
    checkPass
}