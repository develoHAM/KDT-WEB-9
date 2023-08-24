// const model = require('../model/Model');
//models/index에서 index는 생략
const {User} = require('../models')
const bcrypt = require('bcrypt')
const salt = 10;

////////////////////////////////
//GET
//메인페이지
const main = (req, res) => {
    res.render('index');
};
//회원가입페이지
const signup = (req, res) => {
    res.render('signup');
};
//로그인페이지
const signin = (req, res) => {
    res.render('signin');
};
//회원정보 조회 페이지
const profile = async (req, res) => {
    console.log(req.params);
    // console.log(req.query);
    // model.db_profile(req.params, (result) => {
    //     res.render('profile', { data: result[0] });
    // });
    //findOne은 데이터베이스에서 하나의 정보를 찾을 때 사용, 객체반환
    //where: 는 객체형태로 찾을 정보를 입력
    const result = await User.findOne({
        where: { id: req.params.number}
    })
    res.render('profile', { data: result })
};
const buy = (req, res) => {};

///////////////////////////////
//POST
//회원가입
const post_signup = async (req, res) => {
    // model.db_signup(req.body, () => {
    //     res.json({ result: true });
    // });
    const {userid, name, pw} = req.body
    //create는 데이터 생성
    //실습과제 - 비밀번호 암호화하여 저장
    const newPw = await createPassword(pw)
    const result = await User.create({userid, name, pw: newPw})
    res.json({result: true})
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
    const {userid, pw} = req.body
    //실습과제 - 로그인
    //step1 아이디를 찾아서 사용자 존재 유/무 체크
    //step2 입력된 비밀번호 암호화하여 기존 데이터와 비교
    const result = await User.findOne({ where: {userid}})
    console.log('result', result)
    if (result) {
        const login = await comparePassword(pw, result.pw)
        if(login) {
            res.json({result: true, data: result})
        } else {
            res.json({result: false, message: '비밀번호가 틀렸습니다'})
        }
    } else {
        res.json({result: false, message: '회원 아이디가 존재하지 않습니다'})
    }
};

/////////////////////////////////////////
//PATCH
const edit_profile = async (req, res) => {
    // model.db_profile_edit(req.body, () => {
    //     res.json({ result: true });
    // });
    const {name, pw, id} = req.body
    //update(수정될 정보를 객체형태로 입력, 수정될 곳 객체 입력)
    const newPw = await createPassword(pw)
    const result = await User.update({name, pw: newPw}, {where : {id}})
    res.json({result: true})
};

/////////////////////////////////////////
//DELETE
//회원탈퇴 destroy()
const delete_profile = async (req, res) => {
    User.destroy({where: {id: req.body.id}})
    res.json({result: true})
}

const createPassword = (password) => {
    return bcrypt.hash(password, salt)
}

const comparePassword = (password, dbPassword) => {
	return bcrypt.compare(password, dbPassword);
};


module.exports = {
    main,
    signup,
    signin,
    profile,
    buy,
    post_signup,
    post_signin,
    edit_profile,
    delete_profile
};
