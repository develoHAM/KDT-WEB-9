const express = require('express');
const router = express.Router();
const controller = require('../controller/controller');


router.get("/", controller.main)

router.post('/practice2result', controller.result)

module.exports = router;