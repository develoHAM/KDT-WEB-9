// model 모듈 불러오기
// const model = require('../model/User.js')
import * as model from '../model/User.js'

// 메인페이지, 회원가입페이지, 로그인 페이지 렌더
export const index = (req, res) => {
    res.render('index')
}
export const renderSignup = (req, res) => {
    res.render('signup')
}
export const renderSignin = (req, res) => {
    res.render('signin')
}

// 회원가입 기능 구현 및 export
export const Signup = (req, res) => {
    console.log(req.body)
    model.Signup(req.body, (result) => {
        res.send(result)
    })
}

// 로그인 기능 구현 및 export
export const Signin = (req, res) => {
    console.log('Signin, req.body= ', req.body)
    model.Signin(req.body, (result) => {
        console.log('model.Signin, result = ', result)
        res.send(result)
    })
}

// 로그인 완료시 프로필 페이지 렌더 및 export
export const renderProfile = (req, res) => {
    console.log('renderProfile, req.body.id = ', req.body.id)
    model.renderProfile(req.body, (result) => {
        console.log('renderProfile, result = ', result)
        res.render('profile', result)
    })
}

// 프로필 수정 기능 구현 및 export
export const editProfile = (req, res) => {
    console.log('editProfile, req.body = ', req.body)
    model.editProfile(req.body, (result) => {
        res.send(result)
    })
}

// 프로필 삭제 기능 구현 및 export
export const deleteProfile = (req, res) => {
    console.log('deleteProfile, req.body = ', req.body)
    model.deleteProfile(req.body, (result) => {
        res.send(result)
    })
}