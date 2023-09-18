const { User } = require('../models')

const get_main = (req, res) => {
    res.render('main')
}
const get_signup = (req, res) => {
    res.render('signup')
}

const get_signin = (req, res) => {
    res.render('signin')
}

const post_signup = (req, res) => {
    const {userid, name, pw} = req.body
    User.create({
        userid,
        name,
        pw
    }).then((result) => {
        const {id, userid, name, pw} = result
        res.json({result: true, userInfo: {id, userid, name, pw}})
    })
    console.log(req.body)
}

module.exports = {
    get_main,
    get_signup,
    get_signin,
    post_signup,
}