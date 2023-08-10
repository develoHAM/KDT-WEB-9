import express from 'express';
const app = express();
const PORT = 8000;

//view engine
app.set('view engine', 'ejs');
app.set('views', './views');

//body-parser
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//router
import visitorRouter from './routes/index.js';
app.use('/', visitorRouter);


app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})