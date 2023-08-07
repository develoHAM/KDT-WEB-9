const a = require('../model/model')

exports.main = (req, res) => {
    res.render('index')
}

exports.result = (req, res) => {
    //practice 2 variables
    console.log(req.body.id)
    console.log(req.body.pw)
    console.log(a.accountData()[0].pw)
    if (req.body.id == a.accountData().id && req.body.pw == a.accountData().pw) {
        res.send({result: true, userInfo: req.body});
    } else {
        res.send({result: false, userInfo: req.body});
    }
}