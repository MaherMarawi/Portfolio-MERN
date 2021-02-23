const express = require('express')
const router = express.Router()
const controller = require('../controller/aboutController')

//get
router.get('/api/getAbout/:id', controller.getAbout)
router.get('/api/getAbouts/', controller.getAbouts)

//post
router.post('/api/postAbout', controller.postAbout)

//update
router.put('/api/updateAbout/:id', controller.updateAbout)

//delete
router.delete('/api/deleteAbout/:id', controller.deleteAbout)



module.exports = router