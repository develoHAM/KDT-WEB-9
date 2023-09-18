const express = require('express')
const controller = require('../controller/Cuser')
const router = express.Router()

//GET
router.get('/', controller.get_main)
router.get('/signup', controller.get_signup)
router.get('/signin', controller.get_signin)

//POST
router.post('/signup', controller.post_signup)

module.exports = router;