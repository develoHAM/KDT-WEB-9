const express = require('express');
const app = express();
const PORT = 8000;

// body parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// view engine
app.set('view engine', 'ejs');
app.set('views', './views');

// router
app.get('/', (req, res) => {
    res.render('index');
});

// ajax
app.get('/ajax', (req, res) => {
    console.log('back', req.query);
    res.send(req.query);
});

app.post('/ajax', (req, res) => {
    console.log('back', req.body);
    res.send(req.body);
});

// axios
app.get('/axios', (req, res) => {
    console.log('back', req.query);
    res.send(req.query);
});

app.post('/axios', (req, res) => {
    console.log('back', req.body);
    res.send(req.body);
});

// fetch
app.get('/fetch', (req, res) => {
    console.log('back', req.query);
    res.send(req.query);
})

app.post('/fetch', (req, res) => {
    console.log('back', req.body);
    console.log(req.body)
    res.send(req.body);
})



// practice1
app.get('/practice1', (req, res) => {
    res.render('practice1')
})

app.get('/practice1result', (req, res) => {
    console.log('back', req.query)
    res.send(req.query)
})

// practice2
app.get("/practice2", (req, res) => {
    res.render('practice2')
})

app.post('/practice2result', (req, res) => {
    //practice 2 variables
    const id = "codingOn";
    const pw = "1234";
    console.log(req.body.id)
    console.log(req.body.pw)
    if (req.body.id == id && req.body.pw == pw) {
        res.send({result: true, userInfo: req.body});
    } else {
        res.send({result: false, userInfo: req.body});
    }
})

// server start
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});