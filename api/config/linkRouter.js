const express = require('express')
const router = express.Router()
const controller = require('../controller/linkController')

//post
router.post('/api/postLink', controller.postLink)
//get
router.get('/api/getLink', controller.getLink)
//update
router.put('/api/updateLink/:id', controller.updateLink)
//delete
router.delete('/api/deleteLink/:id', controller.deleteLink)



module.exports = router