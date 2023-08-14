const models = require('../models/index')

module.exports.getVisitors = (req, res) => {
    models.Visitor.findAll().then((result)=> {
        res.render('visitor', {data: result});
    })
};

module.exports.getVisitor = (req, res) => {
    models.Visitor.findOne({
        where: {
            id: req.query.id
        }
    }).then((result) => {
        res.render('visitor', {data: [result]});
    })
}

module.exports.postVisitor = (req, res) => {
    models.Visitor.create({
        name: req.body.name,
        comment: req.body.comment
    }).then((result) => {
        res.send({id: result.id, name: req.body.name, comment: req.body.comment})
    })
}

module.exports.patchVisitor = (req, res) => {
    models.Visitor.update({
        name: req.body.name,
        comment: req.body.comment
    },{
        where: {
            id: req.body.id
        }
    }).then(() => {
        res.send({result: true});
    })
}

module.exports.deleteVisitor = (req,res) => {
    models.Visitor.destroy({
        where: {
            id: req.body.id
        }
    }).then(()=> {
        res.send({result: true});
    })
}

