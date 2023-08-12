const express = require('express')
const app = express()
const session = require('express-session')
const cookieParser = require('cookie-parser')
const PORT = 8000;

app.set('view engine', 'ejs')

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use(cookieParser("asdfasdfjkjk"))
const cookieConfig = {
    httpOnly: false,
    maxAge: 60 * 1000,
    // signed: true 
}

app.get('/', (req, res) => {
    res.render('practice1', req)
})

app.post('/', (req, res) => {
    if(req.body.result) {
        res.cookie('myCookie','stopShow', cookieConfig)
        res.send(req.cookies)
    }
})

app.listen(PORT, ()=> {
    console.log(`http://localhost:${PORT}`)
})