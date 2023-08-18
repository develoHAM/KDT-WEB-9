const express = require('express');
const app = express();
const PORT = 8000;
const db = require('./models');
require('dotenv').config();


//ejs
app.set('view engine', 'ejs');
//body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//router
const userRouter = require('./routes/user');
app.use('/', userRouter);

//404
app.use('*', (req, res) => {
    res.render('404');
});

//server open
db.sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log(`http://localhost:${PORT}`);
    });
});
