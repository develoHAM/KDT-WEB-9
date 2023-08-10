const express = require('express');
const app = express();
const PORT = 8000;

//view-engine
app.set('view engine', 'ejs');
app.set('views', './views');

//body-parser
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//static file
app.use(express.static(__dirname + '/static'))

//router
const routerUser = require('./routes/user')
app.use('/user', routerUser)

//404
app.use('*', (req,res) => {
    res.render('404');
})

//Server
app.listen(PORT, () => {
    console.log(`http://localhost${PORT}`)
})