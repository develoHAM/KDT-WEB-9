const model = require('../model/Model');

exports.main = (req, res) => {
    res.render('index', {users: model});
};

exports.register = (req, res) => {
    //req.body.name, req.body.gender, req.body.major
    const {name, gender, major} = req.body
    model.push({id: model.length + 1, name, gender, major})
    res.json({result: true})
};