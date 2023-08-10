const express = require('express')
const app = express()
const PORT = 8000;

// ./models/index 를 db 로 할당
const db = require('./models')

// view engine
app.set('view engine', 'ejs')
app.set('views', './views')

// body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const visitorRouter = require('./routes/visitor')

// ROOT
app.get('/', (req, res) => {
    res.render('index')
})

// localhost:8000/visitor
app.use('/visitor', visitorRouter);

app.use('*', (req, res) => {
    res.render('404');
})

db.sequelize.sync({force: false}).then(() => {
    app.listen(PORT, () => {
        console.log(`http://localhost:${PORT}`);
    });
});

