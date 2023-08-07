const comment = require('../model/MComment')

exports.main = (req, res) => {
    res.render('index');
};

exports.comments = (req, res) => {
    res.render('comments', { commentInfos: comment.comments() });
};

exports.comment = (req, res) => {
    // console.log(req.params);
    // console.log(req.params.id);
    console.log(req.params.id);
    const commentId = req.params.id;
    const comments = comment.comments();
    console.log(comments[commentId -1]);
    res.render('comment', {commentInfo: comments[commentId -1]});
};