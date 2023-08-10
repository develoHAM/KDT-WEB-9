// const Visitor = require('../model/Visitor')

const models = require('../models');

// module.exports.main = (req, res) => {
//     res.render('index');
// };
    // res.render('visitor', { data: Visitor.getVisitors()});

// 전체 방명록 조회
module.exports.getVisitors = (req, res) => {
    // Visitor.getVisitors((result) => {
    //     res.render('visitor', {data: result});
    // });
    //select * from visitor
    models.Visitor.findAll().then( result => {
        res.render('visitor', {data: result});
    })
};

//방명록 하나 조회
module.exports.getVisitor = (req, res) => {
    // Visitor.getVisitor(req.query.id, (result) => {
    //     res.render('visitor', {data: result});
    // })
    models.Visitor.findOne({
        where: {
            id: req.query.id
        },
    }).then(result => {
        res.render('visitor', {data: [result]});
    })
}

//방명록 하나 추가
module.exports.postVisitor = (req, res) => {
    // Visitor.postVisitor(req.body, (result) => {
    //     res.send({id: result.insertId, name: req.body.name, comment: req.body.comment})
    // });
    models.Visitor.create({
        name: req.body.name,
        comment: req.body.comment,
    }).then(result => {
        console.log(result)
        res.send({id: result.dataValues.id, name: req.body.name, comment: req.body.comment})
    })
}

//방명록 하나 수정
module.exports.patchVisitor = (req, res) => {
    // Visitor.patchVisitor(req.body, () => {
    //     res.send({result: true});
    // })
    models.Visitor.update(
        {
            name: req.body.name,
            comment: req.body.comment,
        },
        { where: {id: req.body.id}
        }
        ).then( () => {
        res.send({result: true})
    })
}

//방명록 하나 삭제
module.exports.deleteVisitor = (req,res) => {
    // Visitor.deleteVisitor(req.body.id, () => {
    //     res.send({result: true});
    // });
    models.Visitor.destroy({
        where : {
            id: req.body.id
        }
    }).then(() => {
        res.send({result: true});
    })
}