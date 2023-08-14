const express = require('express')
const app = express()
const PORT = 8000;
const jwt = require('jsonwebtoken')
const secret = 'icCWWUD5aY2ueuUdgZ9Z8T7AT8nu9eIF'
const userInfo = {id: 'kdt9', pw: '1234', name: '홍길동'}

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.get('/', (req, res) => {
    res.render('practice1_index_solution')
})

app.get('/login', (req, res) => {
    res.render('practice1_login_solution')
})

app.get('/token', (req, res) => {
    if(req.headers.authorization) {
        const token = req.headers.authorization.split(' ')
        try {
            const result = jwt.verify(token[1], secret)
            if( result.id === userInfo.id) {
                res.json({result: true, name: userInfo.name})
            }
        } catch (error) {
            console.log(error)
            res.json({result: false, meesage: '인증된 회원이 아닙니다'})
        }
    } else {
        res.redirect('/practice1_login')
    }
})

app.post('/login', (req, res) => {
    try {
        const {id, pw} = req.body;
        const {id:uId, pw: uPw} = userInfo;
        if(id === uId && pw === uPw) {
            const token = jwt.sign({id}, secret)
            res.json({result: true, token})
        } else {
            res.json({result: false, message: '로그인 정보가 올바르지 않음'})
        }
        
    } catch (error) {
        console.log(error)
    }
})


app.listen(PORT, ()=> {
    console.log(`http://localhost:${PORT}`)
})