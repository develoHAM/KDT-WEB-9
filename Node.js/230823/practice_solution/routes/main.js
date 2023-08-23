const express = require('express');
const router = express.Router();
const controller = require('../controller/Cmain');

//회원 전체 리스트
router.get('/', controller.main);

//회원 정보 추가
router.post('/register', controller.register)

module.exports = router;
