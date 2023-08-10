const User = require('../model/User')

exports.index = (req,res) => {
    res.render('index');
}

exports.signupGet = (req,res) => {
    res.render('signup');
}

exports.signupPost = (req, res) => {
    User.signupPost(req.body, (result) => {
        res.send(result)
    })
}

exports.signinGet = (req,res) => {
    res.render('signin');
}

exports.signinPost = (req,res) => {
    User.signinPost(req.body, (result) => {
        res.send(result)
    })
}

exports.profilePost = (req, res) => {
    User.profilePost(req.body, (result) => {
        if (result.length > 0) {
            res.render('profile', {data: result[0]})
        }
    })
}

exports.profileEdit = (req, res) => {
    console.log(req.body)
    User.profileEdit(req.body, () => {
        res.send({result: true})
    })
}

exports.profileDelete = (req, res) => {
    User.profileDelete(req.body, (result) => {
        res.send(result)
    })
}