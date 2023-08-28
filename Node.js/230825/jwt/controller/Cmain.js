//const model = require('../model/Model');
//models/index에서 index는 생략
const { User } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const SECRET = 'codingOnSecret'

//쿠키 설정
const cookieConfig = {
    httpOnly: true,
    maxAge: 60 * 1000, //1분
};

////////////////////////////////
//GET
//메인페이지
const main = (req, res) => {
    //쿠키사용
    // console.log('cookie', req.cookies);
    console.log(req.cookies.isLogin);
    if (req.cookies.isLogin) {
        //쿠키가 존재한다면 로그인 되어있는상태
        res.render('index', { cookie: true });
    } else {
        //쿠키가 없으면 비로그인 => alert창 띄우기
        res.render('index', { cookie: false });
    }
};
//회원가입페이지
const signup = (req, res) => {
    //쿠키생성
    //res.cookie(쿠키이름, 쿠키값, 옵션객체)
    // res.cookie('testCookie', 'signup', cookieConfig);
    res.render('signup');
};
//로그인페이지
const signin = (req, res) => {
    // console.log(req.session.userInfo, req.sessionID);
    // if (req.session.userInfo) {
    //     res.redirect(`/profile/${req.session.userInfo.id}`);
    // } else {
    //     res.render('signin');
    // }
    res.render('signin');
};
//회원정보 조회 페이지
const profile = (req, res) => {
    console.log(req.params);
    // console.log(req.query);
    // model.db_profile(req.params, (result) => {
    //     res.render('profile', { data: result[0] });
    // });
    //findOne은 데이터베이스에서 하나의 정보를 찾을 때 사용, 객체반환
    //where: 는 객체형태로 찾을 정보를 입력
    User.findOne({
        where: { id: req.params.number },
    }).then((result) => {
        res.render('profile', { data: result });
    });
};
const buy = (req, res) => { };
//전체회원조회
const members = (req, res) => {
    if (req.session.userInfo) {
        User.findAll().then((result) => {
            res.render('members', { name: req.session.userInfo.name, result });
        });
    } else {
        res.redirect('/signin');
    }
};

///////////////////////////////
//POST
//회원가입
const post_signup = async (req, res) => {
    // model.db_signup(req.body, () => {
    //     res.json({ result: true });
    // });
    const { userid, name, pw } = req.body;
    //create 데이터 생성
    //실습과제 - 비밀번호 암호화하여 저장
    const hash = await bcryptPassword(pw);
    User.create({ userid, name, pw: hash }).then(() => {
        res.json({ result: true });
    });
};
//로그인
const post_signin = async (req, res) => {
    // model.db_signin(req.body, (result) => {
    //     if (result.length > 0) {
    //         res.json({ result: true, data: result[0] });
    //     } else {
    //         res.json({ result: false });
    //     }
    // });
    //실습과제 - 로그인
    //step1 아이디를 찾아서 사용자 존재 유/무 체크
    const { userid, pw } = req.body;
    const user = await User.findOne({
        where: { userid },
    });
    if (user) {
        //step2 입력된 비밀번호 암호화하여 기존 데이터와 비교
        //사용자가 존재함
        const result = await compareFunc(pw, user.pw);
        console.log('result', result);
        if (result) {
            //세션 생성
            // req.session.userInfo = { name: user.name, id: user.id };
            //JWT 생성
            const token = jwt.sign({ name: user.name, id: user.id }, SECRET );
            res.cookie('isLogin', true);
            res.cookie('aToken', token);
            res.json({ result: true, data: user, token });
        } else {
            res.json({ result: false, message: '비밀번호가 틀렸습니다.' });
        }
    } else {
        //사용자가 존재하지 않음
        res.json({ result: false, message: '존재하는 사용자가 없습니다' });
    }
};
/////////////////////////////////////////
//PATCH
const edit_profile = async (req, res) => {
    // model.db_profile_edit(req.body, () => {
    //     res.json({ result: true });
    // });
    const { name, pw, id } = req.body;
    //headers의 요청은 req.headers안에 있음
    console.log(req.headers);
    //split() ()안에 문자를 기준으로 문자열을 잘라내기한 후 배열을 반환
    const [bearer, token] = req.headers.authorization.split(" ")
    if (bearer === "Bearer") {
        try {
            const result = jwt.verify(token, SECRET)
            console.log(result)
            const returnValue = await User.findOne({ where: { id: result.id } })
            if (returnValue) {
                const hash = await bcryptPassword(pw)
                // update ( 수정될 정보를 객체형태로 입력, 수정될 곳 객체 입력 )
                User.update({ name, pw: hash }, { where: { id } }).then(() => {
                    res.json({ result: true });
                });
            }
        } catch (error) {
            console.log('실패')
            res.json({ result: false, message: '인증에 실패하였습니다' })
        }
    } else {
        res.json({ result: false, message: "잘못된 인증방식입니다" })
    }
};

/////////////////////////////////////
//DELETE
//회원탈퇴 destroy()
const destroy = (req, res) => {
    const { id } = req.body;
    User.destroy({
        where: { id },
    }).then(() => {
        //쿠키삭제
        //res.clearCookie(쿠키이름)
        res.clearCookie('isLogin');
        //세션삭제
        // req.session.destroy();
        res.json({ result: true });
    });
};

module.exports = {
    main,
    signup,
    signin,
    profile,
    buy,
    members,
    post_signup,
    post_signin,
    edit_profile,
    destroy,
};

/////function
//암호화
const bcryptPassword = (password) => bcrypt.hash(password, 11);
//비교
const compareFunc = (password, dbpass) => bcrypt.compare(password, dbpass);
