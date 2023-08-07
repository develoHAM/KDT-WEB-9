const express = require('express')
const router = express.Router()
const controller = require('../controller/CComment')


// middleware 이기때문에 app.use로 대체가 가능, 다만 위에서부터 아래로 코드가 읽히기 때문에 get, post 구분해서 사용함

router.get('/', controller.main);

// GET /comments
router.get('/comments', controller.comments);

// GET /comment/:id
router.get('/comment/:id', controller.comment);

module.exports = router;