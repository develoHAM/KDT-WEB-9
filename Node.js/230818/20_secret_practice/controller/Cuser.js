const { User } = require('../models');
const bcrypt = require('bcrypt');
const saltNumber = process.env.SALT
const key = process.env.KEY
const jwt = require('jsonwebtoken')

exports.index = (req, res) => {
    console.log(saltNumber)
    res.render('index');
};

exports.signup_get = (req, res) => {
    res.render('signup')
}

exports.signin_get = (req, res) => {
    res.render('signin')
}

exports.signup_post = async(req, res) => {
    const {userid, name, pw} = req.body
    const checkDuplicate = await User.findOne({
        where: {
            userid: userid
        }
    })
    console.log('checkDuplicate ======', checkDuplicate)
    if (!checkDuplicate) {
        const result = await User.create({
            userid: userid,
            pw: bcryptPassword(pw),
            name: name,
        })
        if (result) {
            res.json({result: true, message: '회원가입 성공'})
        } else {
            res.json({result: false, message: '오류 발생'})
        }
    } else {
        res.json({result: false, message: '이미 존재하는 아이디 입니다'})
    }
}

exports.signin_post = async(req, res) => {
    const {userid, pw} = req.body
    const result = await User.findOne({
        where: {
            userid: userid
        }
    })
    const compare = comparePassword(pw, result.pw)
    console.log('compare =====',compare)
    if (compare) {
        const token = jwt.sign(result.userid, key)
        res.json({result: true, token: token})
    } else {
        res.json({result: false})
    }
}

exports.account_get = (req, res) => {
    res.render('profile')
}

exports.account_post = async(req, res) => {
    const token = req.headers.authorization.split(' ')
    if (token[0] === 'Bearer') {
        const decoded = jwt.verify(token[1], key)
        const result = await User.findOne({
            where: {
                userid: decoded
            }
        })
        res.send({result})

    }
}


//암호화
const bcryptPassword = (password) => {
    return bcrypt.hashSync(password, Number(saltNumber));
};
//비교
const comparePassword = (password, dbPassword) => {
    return bcrypt.compareSync(password, dbPassword);
};