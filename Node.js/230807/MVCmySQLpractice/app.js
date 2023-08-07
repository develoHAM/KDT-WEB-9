const express = require('express')
const app = express()
const PORT = 8000;
const mysql = require('mysql')

// view engine
app.set('view engine', 'ejs')
app.set('views', './views')

// body-parser
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//mySQL 연결
const conn = mysql.createConnection({
    host: '127.0.0.1',
    user: 'visitor',
    password: '1234',
    database: 'kdt9',
    port: '3306'
});

conn.connect((err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('connect');
});

// const indexRouter = require('./routes')
// app.use('/', indexRouter);

// ROOT
app.get('/', (req, res) => {
    res.render('index')
})

// GET /visitor: 방명록 전체 보이기
app.get('/visitor', (req, res) => {
    const query = 'SELECT * FROM visitor'
    conn.query(query, (err, rows) => {
        console.log(rows);
        res.render('visitor', {data: rows});
    });
})

// GET /visitor/get: 방명록 하나 조회
app.get('/visitor/get', (req, res) => {
    res.send('방명록 하나 조회')
})

// POST /visitor/write: 방명록 하나 생성
app.post('/visitor/write', (req, res) => {
    const query = `INSERT INTO visitor (name, comment) VALUES ('${req.body.name}','${req.body.comment}')`
    conn.query(query, (err, rows) => {
        console.log(rows);
        res.send({id: rows.insertId, name: req.body.name, comment: req.body.comment})
    })
})

// PATCH /visitor/edit: 방명록 하나 수정
app.patch('/visitor/edit', (req, res) => {
    res.send('방명록 하나 수정')
})

// DELETE /visit/delete: 방명록 하나 삭제
app.delete('/visitor/delete', (req,res) => {
    const query = `DELETE FROM visitor WHERE id='${req.body.id}'`
    conn.query(query, (err, rows) => {
        console.log('삭제했어요~')
    })
})




// app.use('*', (req, res) => {
//     res.render('404');
// })

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})