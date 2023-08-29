const http = require('http')
const ws = require('ws');
const express = require('express')
const app = express()

//http서버
const server = http.createServer(app)

//웹소켓 서버 접속
const wss = new ws.Server({server: server});

const PORT = 8000;

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('client')
})

//브라우저(클라이언트)들을 담을 배열변수
const sockets = []
//socket변수는 접속한 브라우저
wss.on('connection', (socket) => {
    console.log(socket)
    console.log('클라이언트가 연결되었습니다.');
    //sockets배열에 브라우저 정보 추가
    sockets.push(socket)
    //메세지 이벤트
    socket.on('message', (message) => {
        console.log(`클라이언트로부터 받은 메세지: ${message}`);
        // socket.send(`서버메세지: ${message}`)
        sockets.forEach((elem) => {
            elem.send(`서버메세지: ${message}`)
        })
    });

    //오류 이벤트
    socket.on('error', (error) => {
        console.log('에러가 발생하였습니다', error);
    });

    //접속종료 이벤트
    socket.on('close', () => {
        console.log('클라이언트와 연결이 종료 되었습니다.');
    });
});

server.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})
