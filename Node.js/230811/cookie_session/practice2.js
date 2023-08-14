const express = require('express');
const app = express();
const PORT = 8000;
const cookieParser = require('cookie-parser')
const session = require('express-session')

app.set('view engine', 'ejs')

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(session({
    secret: 'mySessionSecret',
    resave: false,
    saveUninitialized: true,
    })
);

app.get('/', (req, res) => {
    if (req.session.login) {
        res.render('practice2_logout')
    } else {
        req.session.destroy(
            res.render('practice2_login')
        )
    }
}) 

app.post('/', (req, res) => {
    req.session.login = req.body.login
    console.log(req.body.login)
    res.send(req.session.login)
})

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})