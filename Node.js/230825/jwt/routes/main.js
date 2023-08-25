const express = require('express');
const router = express.Router();
const controller = require('../controller/Cmain');

router.get('/', controller.main);
//회원가입
router.get('/signup', controller.signup); //회원가입 페이지 열기
router.post('/signup', controller.post_signup); //데이터베이스에 회원정보 저장
//로그인
router.get('/signin', controller.signin); //로그인 페이지 열기
router.post('/signin', controller.post_signin); //로그인하기

//회원정보수정 기능
//회원정보조회 =>GET
//GET 조회 방식이때는 url을 query string 또는 파라미터 방식으로 지정
//query string방식은 페이지 이동을 안하며 파라미터는 페이지를 이동(res.render)
router.get('/profile/:number', controller.profile);
//회원정보수정 =>PATCH
router.patch('/profile/edit', controller.edit_profile);

//예시) 회원 구매목록
router.get('/profile/buy', controller.buy);

//회원탈퇴
router.delete('/destroy', controller.destroy);

//전체회원 조회
router.get('/members', controller.members);

module.exports = router;
