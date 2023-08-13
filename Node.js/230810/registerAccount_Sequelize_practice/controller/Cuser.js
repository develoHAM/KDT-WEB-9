// model 모듈 불러오기
// const model = require('../model/User.js')
// const { name } = require('ejs')
const {Account} = require('../models/index')
const {Op} = require('sequelize')

// 메인페이지, 회원가입페이지, 로그인 페이지 렌더
module.exports.index = (req, res) => {
    res.render('index')
}
module.exports.renderSignup = (req, res) => {
    res.render('signup')
}
module.exports.renderSignin = (req, res) => {
    res.render('signin')
}

// 회원가입 기능 구현 및 export
module.exports.Signup = (req, res) => {
    // console.log(req.body)
    // model.Signup(req.body, (result) => {
    //     res.send(result)
    // })
    Account.create({
        userid: req.body.userid,
        name: req.body.name,
        pw: req.body.pw
    }).then((result) => {
        console.log('resulttttttttttt', result)
        res.send({result: true})
    }).catch((error) => {
        console.log('errorrrrrrrrrrrrr', error)
        res.send({result: false})
    })
};

// 로그인 기능 구현 및 export
module.exports.Signin = (req, res) => {
    // console.log('Signin, req.body= ', req.body)
    // model.Signin(req.body, (result) => {
    //     console.log('model.Signin, result = ', result)
    //     res.send(result)
    // })
    Account.findOne({
        where : {
            userid: req.body.userid,
            pw: req.body.pw
        },
    }).then( (result) => {
        console.log('ttttttttttt', result)
        console.log('tttt', result.dataValues)
        res.send({result: true, userdata: result.dataValues})
    }).catch((error) => {
        console.log('errrr', error)
        res.send({result: false})
    })
};

// 로그인 완료시 프로필 페이지 렌더 및 export
module.exports.renderProfile = (req, res) => {
    // console.log('renderProfile, req.body.id = ', req.body.id)
    // model.renderProfile(req.body, (result) => {
    //     console.log('renderProfile, result = ', result)
    //     res.render('profile', result)
    // })
    Account.findOne({
        where: {
            id: req.body.id,
        }
    }).then((result) => {
        console.log('profile result', result.dataValues)
        res.render('profile', {result: true, userdata: result.dataValues})
    }).catch((error) => {
        res.send({result: false})
    })
}

// 프로필 수정 기능 구현 및 export
module.exports.editProfile = (req, res) => {
    // console.log('editProfile, req.body = ', req.body)
    // model.editProfile(req.body, (result) => {
    //     res.send(result)
    // })
    Account.update(
        {
            userid: req.body.userid, 
            name: req.body.name, 
            pw: req.body.pw
        },
        {
            where: {
                id: req.body.id
            }
        }).then((result) => {
            res.send({result: true})
        }).catch((error) => {
            res.send({result: false})
        })
}

// 프로필 삭제 기능 구현 및 export
module.exports.deleteProfile = (req, res) => {
    // console.log('deleteProfile, req.body = ', req.body)
    // model.deleteProfile(req.body, (result) => {
    //     res.send(result)
    // })
    Account.destroy({
        where: {
            id: req.body.id
        }
    }).then((result) => {
        res.send({result: true})
    }).catch((error) => {
        res.send({result: false})
    })
}

module.exports.findall = (req, res) => {
    Account.findAll({
        //attribues 원하는 컬럼 조회
        // attributes: ['name', 'userid'],
        // where: {
        //     //Op.gt(초과), Op.gte(이상), Op.t(미만), Op.ne(같지않은)
        //     //Op.or(또는), Op.in(배열 요소중 하나), Op.notIn(배열요소와 모두다름)
        //     id: { [Op.gte] : 4}
        // },
        order: [['id', 'DESC']],
        limit: 2,
        offset: 1
    }).then((result) => {
        console.log('findAll', result);
        res.send(result)
    })
}