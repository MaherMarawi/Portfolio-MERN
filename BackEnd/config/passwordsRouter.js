const express = require('express')
const router = express.Router()
const controller = require('../controller/passwordsController')

//get
router.get('/api/getPasswords', controller.getPasswords)
//post
router.post('/api/postPassword', controller.postPass)
//delete
router.delete('/api/deletePassword/:id', controller.deletePass)
//change status
router.put('/api/checkPassword/:id', controller.checkPass)




module.exports = router