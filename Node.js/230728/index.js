const express = require( 'express' );
//import express from 'express'

const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('views', './views');

// 정적인 파일 불러오기
app.use(express.static('./public'));


app.get('/', (req, res) => {
    // send() - 클라이언트에 응답 데이터를 보낼때 사용
    // res.send("Hello Express")
    res.send({result: true, code: 1000, message: "회원가입성공"})
})

app.get('/practice1', (req, res) => {
    // redner() - 뷰 엔진을 렌더링할때 사용
    res.render('practice1', {caterpillar : 'caterpillar' , body : 'body'})
})

app.get('/practice2', (req, res) => {
    res.render('practice2', {fruits : ['apple', 'banana', 'grape', 'peach'] , fruitName : ['사과','바나나','포도','복숭아']});
})

app.get('/practice3', (req, res) => {
    res.render('practice3', {num : [1,2,3,4,5,6,7,8,9]});
})

app.get('/practice4', (req, res) => {
    res.render('practice4', {pageLink : [{link : 'practice1', name : '첫번째', img : 'img/practice1.png'}, {link : 'practice2', name : '두번째', img : 'img/practice2.png'}, {link : 'practice3', name : '세번째', img : 'img/practice3.png'} ]});
})

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})