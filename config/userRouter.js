const express = require('express')
const router = express.Router()
const controller = require('../controller/userController')

//get
router.get('/api/getUser/:id', controller.getUser)
router.get('/api/getUsers/', controller.getUsers)

//post
router.post('/api/postUser', controller.postUser)

//update
router.put('/api/updateUser/:id', controller.updateUser)

//delete
router.delete('/api/deleteUser/:id', controller.deleteUser)



module.exports = router