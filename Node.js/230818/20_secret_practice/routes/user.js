const express = require('express');
const router = express.Router();
const controller = require('../controller/Cuser');

//메인페이지
router.get('/', controller.index);

//회원가입
router.get('/signup', controller.signup_get)
router.post('/signup', controller.signup_post)

//로그인
router.get('/signin', controller.signin_get)
router.post('/signin', controller.signin_post)

//회원정보페이지
router.get('/account', controller.account_get)
router.post('/account', controller.account_post)

module.exports = router;
