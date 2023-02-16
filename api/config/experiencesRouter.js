const express = require('express')
const router = express.Router()
const controller = require('../controller/experiencesController')

//get
router.get('/api/getExperience/:id', controller.getExperience)
router.get('/api/getExperiences/', controller.getExperiences)

//post
router.post('/api/postExperience', controller.postExperience)

//update
router.put('/api/updateExperience/:id', controller.updateExperience)

//delete
router.delete('/api/deleteExperience/:id', controller.deleteExperience)



module.exports = router