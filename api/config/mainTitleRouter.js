const express = require('express')
const router = express.Router()
const controller = require('../controller/mainTitleController')

//get
router.get('/api/getMainTitle/:id', controller.getMainTitle)
router.get('/api/getMainTitle/', controller.getMainTitles)
//post
router.post('/api/postMainTitle', controller.postMainTitle)
//update
router.put('/api/updateMainTitle/:id', controller.updateMainTitle)
//delete
router.delete('/api/deleteMainTitle/:id', controller.deleteMainTitle)



module.exports = router