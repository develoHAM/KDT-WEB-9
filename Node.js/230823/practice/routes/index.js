const express = require('express')
const router = express.Router()
const controller = require('../controller/Cuser')

router.get('/', controller.main)
router.get('/members', controller.members)
router.post('/new', controller.new)

module.exports = router