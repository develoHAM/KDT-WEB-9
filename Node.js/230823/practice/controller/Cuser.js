const model = require('../model/Users')

module.exports.main = (req, res) => {
    res.render('index')
}

module.exports.members = (req, res) => {
    res.render('members', {data: model})
}

module.exports.new = (req, res) => {
    const {id, name, gender, major} = req.body
    model.push({id, name, gender, major}) 
    res.send({result: true})   
}