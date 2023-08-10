// express 모듈 불러오기
// const express = require('express');
import express from 'express';
// express 함수 app 변수로 정의
const app = express();
// port 번호 정의
const PORT = 8000;

// body-parser
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// view engine
app.set('view engine', 'ejs');
app.set('views', './views');

// router
// const userRouter = require('./routes/user.js')
import userRouter from './routes/user.js'
app.use('/user', userRouter)

// 404
app.use('*', (req, res) => {
    res.render('404')
})

// server listen
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})