const express = require('express')
const app = express();
const PORT = 8000;

//body-parser
app.use(express.urlencoded({ exteneded: true }));
app.use(express.json());

// view engine
app.set('view engine', 'ejs');
app.set('views', './views');

//router
app.get('/', (req, res) => {
    // console.log(req.body);
    // console.log(req.body);
    res.render('index', {title: "폼 전송 실습"});
});

app.get('/getForm', (req, res) => {
    console.log(req.query);
    res.render('result', {
        title: "GET요청 폼 결과 확인하기",
        userInfo: req.query
    });
});

app.post('/postForm', (req, res) => {
    console.log(req.body);
    res.render('result', {
        title: 'POST요청 폼 결과 확인하기',
        userInfo: req.body
    });
});

app.get('/practice1', (req, res) => {
    console.log(req.query);
    res.render('practice1', {
        title: "실습 1 : GET으로 정보 받기",
        userInfo: req.query
    });
});

app.get('/practice1result', (req, res) => {
    console.log(req.query);
    res.render('practice1result', {
        title: "GET요청 폼 결과 확인하기",
        userInfo: req.query
    });
});

app.get('/practice2', (req, res) => {
    console.log(req.query);
    res.render('practice2', {
        title: "실습 1 : GET으로 정보 받기",
        userInfo: req.query
    });
});

app.post('/practice2result', (req, res) => {
    res.render('practice2result', {
        title: "실습 2 : POST로 정보 받기",
        userInfo: req.body
    })
})

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});