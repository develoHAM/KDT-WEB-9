// const Visitor = require('../model/Visitor')
const models = require('../models/index')

// module.exports.main = (req, res) => {
//     res.render('index');
// };
    // res.render('visitor', { data: Visitor.getVisitors()});

module.exports.getVisitors = (req, res) => {
    // Visitor.getVisitors((result) => {
    //     res.render('visitor', {data: result});
    // });
    models.Visitor.findAll().then((result)=> {
        res.render('visitor', {data: result});
    })
};

module.exports.getVisitor = (req, res) => {
    // Visitor.getVisitor(req.query.id, (result) => {
    //     res.render('visitor', {data: result});
    // })
    models.Visitor.findOne({
        where: {
            id: req.query.id
        }
    }).then((result) => {
        res.render('visitor', {data: [result]});
    })
}

module.exports.postVisitor = (req, res) => {
    // Visitor.postVisitor(req.body, (result) => {
    //     res.send({id: result.insertId, name: req.body.name, comment: req.body.comment})
    // });
    models.Visitor.create({
        name: req.body.name,
        comment: req.body.comment
    }).then((result) => {
        res.send({id: result.id, name: req.body.name, comment: req.body.comment})
    })
}

module.exports.patchVisitor = (req, res) => {
    // Visitor.patchVisitor(req.body, () => {
    //     res.send({result: true});
    // })
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
    // Visitor.deleteVisitor(req.body.id, () => {
    //     res.send({result: true});
    // });
    models.Visitor.destroy({
        where: {
            id: req.body.id
        }
    }).then(()=> {
        res.send({result: true});
    })
}