const express = require('express')
const app = express()
const PORT = 8000;

// view engine
app.set('view engine', 'ejs')
app.set('views', './views')

// body-parser
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// model
const db = require('./models')

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

// app.listen(PORT, () => {
//     console.log(`http://localhost:${PORT}`);
// });

db.sequelize.sync({force: false}).then(()=> {
    app.listen(PORT, () => {
        console.log(`http://localhost:${PORT}`);
    });
});

