const express = require('express')
const router = express.Router()
const controller = require('../controller/mailController')

//get
router.post('/api/sendEmail', controller.sendEmail)



module.exports = router