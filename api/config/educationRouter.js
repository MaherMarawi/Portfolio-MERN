const express = require('express')
const router = express.Router()
const controller = require('../controller/educationController')

//get
router.get('/api/getEducation/:id', controller.getEducation)
router.get('/api/getEducation/', controller.getAllEducation)

//post
router.post('/api/postEducation', controller.postEducation)

//update
router.put('/api/updateEducation/:id', controller.updateEducation)

//delete
router.delete('/api/deleteEducation/:id', controller.deleteEducation)



module.exports = router