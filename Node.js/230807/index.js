const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const router = require('./routes') // 기본적으로 찾는 파일명은 index.js 이기에 ./routes.index.js => ./routes 로 생량 가능

app.use('/', router);
// example)
// const userRouter = require('./routes/user.js');
// app.use('/user', userRouter)

// * : 맨마지막 선언
app.use('*', (req, res) => {
    res.render('404');
})

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})