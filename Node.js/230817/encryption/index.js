const express = require('express');
const crypto = require('crypto');
const app = express();
const PORT = 8000;
let pass = ''
const salt = crypto.randomBytes(16).toString('hex') // 솔드생성
const leng = 1000 //반복횟수
const key = 64 //생성할 키의 길이
const alg = 'sha512' //암호화 알고리즘

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.post('/login', (req, res) => {
    const {pw} = req.body;
    //createHash: 지정한 알고리즘을 이용하여 해시 생성
    //const pass = crypto.createHash('sha512').update(pw).digest('base64');
    //pbkdf2(Sync): Sync가 붙으면 동기, 안붙으면 비동기 : 비밀번호 기반 키 도출 함수, 뒤에 toString을 안붙이면 Buffer값을 반환
    // const salt = crypto.randomBytes(64).toString('base64')
    pass = crypto.pbkdf2Sync(pw, salt, leng, key, alg).toString('base64')
    res.send(pass);
});

app.post('/verify', (req, res) => {
    const {pw} = req.body;

    // 기본적인 비교 방법
    // const compare = crypto.pbkdf2Sync(pw, salt, leng, key, alg).toString('base64')

    // if(compare === pass) {
    //     res.send(true);
    // } else {
    //     res.send(false)
    // }
    // console.log('compare', compare)

    // 고급 비교 방법
    //timingSafeEqual(): 두개의 버퍼를 상수 시간으로 비교하는 함수
    const compare = crypto.pbkdf2Sync(pw, salt, leng, key, alg) //toString 을 안해줘서 이미 Buffer값을 반환함
    console.log(compare)
    //Buffer.from(): 값을 버퍼 값으로 만들어주는 함수
    const result = crypto.timingSafeEqual(compare, Buffer.from(pass, 'base64'))
    res.send(result)
})

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});