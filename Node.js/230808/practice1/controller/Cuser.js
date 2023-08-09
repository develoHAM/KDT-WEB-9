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
    res.render('profile', {data: req.body})
}

exports.profileEdit = (req, res) => {
    User.profileEdit(req.body, (result) => {
        res.send(result)
    })
}

exports.profileDelete = (req, res) => {
    User.profileDelete(req.body, (result) => {
        res.send(result)
    })
}