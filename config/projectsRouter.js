const express = require('express')
const router = express.Router()
const controller = require('../controller/projectsController')
const { uploadImage } = require('../controller/uploadImage')


//get
// router.get('/api/getProject/:id', controller.getProject)
router.get('/api/getProjects/', controller.getProjects)

//post
router.post('/api/postProject', uploadImage.single('projectImage'), controller.postProject)

//update
// router.put('/api/updateProject/:id', controller.updateProject)

//delete
router.delete('/api/deleteProject/:id', controller.deleteProject)



module.exports = router