const Visitor = require('../model/Visitor')

module.exports.main = (req, res) => {
    res.render('index');
};

module.exports.getVisitors = (req, res) => {
    res.render('visitor', { data: Visitor.getVisitors()});
};