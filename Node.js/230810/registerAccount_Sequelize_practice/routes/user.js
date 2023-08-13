// express 모듈 불러오기
const express = require('express')
// epxress 모듈의 Router 함수 router 변수로 정의
const router = express.Router()
// controller 모듈 불러오기
const controller = require('../controller/Cuser.js')

// 메인페이지, 회원가입페이지, 로그인 페이지 렌더
router.get('/', controller.index)
router.get('/signup', controller.renderSignup)
router.get('/signin', controller.renderSignin)

// 회원가입 기능 구현
router.post('/signup', controller.Signup)

// 로그인 기능 구현
router.post('/signin', controller.Signin)

// 로그인 완료시 프로필 페이지 렌더
router.post('/profile', controller.renderProfile)

// 프로필 수정 기능 구현
router.patch('/profile/edit', controller.editProfile)

// 프로필 삭제 기능 구현
router.delete('/profile/delete', controller.deleteProfile)

// findall
router.get('/findall', controller.findall)

// 정의된 router 함수들을 모두 export
module.exports = router;