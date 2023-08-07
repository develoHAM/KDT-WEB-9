const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// 임시 데이터
const comments = [
    {
        id: 1,
        userId: 'helloworld',
        date: '2023-08-01',
        comment: '안녕하세요'
    },
    {
        id: 2,
        userId: 'widowmaker',
        date: '2022-03-17',
        comment: '행복하집시다'
    },
    {
        id: 3,
        userId: 'yasuo',
        date: '2023-06-21',
        comment: '열공합니다'
    },
    {
        id: 4,
        userId: 'trundle',
        date: '2019-02-29',
        comment: '집에가고싶어요'
    }
]

// middleware 이기때문에 app.use로 대체가 가능, 다만 위에서부터 아래로 코드가 읽히기 때문에 get, post 구분해서 사용함

app.get('/', (req, res) => {
    res.render('index');
})

// GET /comments
app.get('/comments', (req, res) => {
    res.render('comments', { commentInfos: comments })
})

// GET /comment/:id
app.get('/comment/:id', (req, res) => {
    // console.log(req.params);
    // console.log(req.params.id);
    console.log(req.params.id);
    const commentId = req.params.id;
    res.render('comment', {commentInfo: comments[commentId -1]})
})

// * : 맨마지막 선언
app.use('*', (req, res) => {
    res.render('404');
})

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})