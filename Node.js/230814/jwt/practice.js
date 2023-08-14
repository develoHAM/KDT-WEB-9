const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')
const PORT = 8000;

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: true}));
app.use(express.json());

const secret = 'ta89DFoIIWDJGTjq6AlCj3ZOpCmtKOfm';
const userInfo = {id: 'kdt9', pw: '1234'}

app.get('/', (req, res) => {
    res.render('practice1_index')
})

app.get('/login', (req, res) => {
    res.render('practice1_login')
})

app.post('/login', (req, res) => {
    const {id, pw} = req.body
    const {id: uId, pw: uPw} = userInfo
    if(id === uId && pw === uPw) {
        const token = jwt.sign({id}, secret)
        res.send({result: true, token: token})
    } else {
        res.send({result: false})
    }
})

app.post('/verify', (req, res) => {
    console.log(req.headers)
    const token = req.headers.authorization
    jwt.verify(token, secret, (err, decoded) => {
        if(err) {
            console.log(err)
            res.send({result: false})
        } else {
            res.send({result: true, user: decoded.id})
        }
    })
})

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})