const express = require('express')
const jwt = require('jsonwebtoken')
const app = express()
const PORT = 8000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));
app.use(express.json());

const secret = 'secretKey'

app.get('/', (req, res) => {
    res.render('index')
})
app.post('/login', (req, res) => {
    const {id, pw} = req.body

    const token = jwt.sign({id}, secret);
    res.send({result: true, token: token })
});

// function a(req, res) {
//     const auth = req.headers.authorization
//     const token = auth.split(' ')
//     if(token[0] === 'Bearer') {
//         jwt.verify(token[1], secret, (err, decoded) => {
//             if(err) {
//                 return res.status(403).send({message: '검증실패'})
//             }
//             res.send({user: decoded}) 
//             console.log(decoded)
//         });
//     } else {
//         res.send({message: '잘못된 인증방식입니다'})
//     }
// }

app.post('/verify', (req, res) => {
    const auth = req.headers.authorization
    const token = auth.split(' ')
    if(token[0] === 'Bearer') {
        jwt.verify(token[1], secret, (err, decoded) => {
            if(err) {
                return res.status(403).send({message: '검증실패'})
            }
            res.send({user: decoded}) 
            console.log(decoded)
        });
    } else {
        res.send({message: '잘못된 인증방식입니다'})
    }
    // a(req, res); //전역함수 예시
})

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})