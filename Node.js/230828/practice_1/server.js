const ws = require('ws');
const express = require('express')
const app = express()
const PORT = 8000;

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('client')
})

const server = app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})

//웹소켓 서버 접속
const wss = new ws.Server({server: server});
//브라우저(클라이언트)들을 담을 배열변수 혹은 wss.clients 사용
const sockets = []
//socket변수는 접속한 브라우저
wss.on('connection', (socket) => {
    // console.log(socket)
    console.log('클라이언트가 연결되었습니다.');

    //클라이언트 상태확인
    //ws.CONNECTING() : 0 웹소켓이 연결 시도중
    //ws.OPEN() : 1 웹소켓이 열린상태
    //ws.CLOSING() : 2 웹소켓이 닫히는 중
    //ws.CLOSED() : 3 웹소켓이 닫힌상태
    //socket.readyState: 웹소켓의 클라이언트 상태를 나타내는 속성

    //sockets배열에 브라우저 정보 추가
    // sockets.push(socket)

    //메세지 이벤트
    socket.on('message', (message) => {
        // console.log(`클라이언트로부터 받은 메세지: ${message}`);
        // socket.send(`서버메세지: ${message}`)
        // 웹소켓을 통해 클라이언트와 서버간의 데이터를 주고받을때는 일반적으로 문자열 또는 버퍼형태로 전달됨
        // 서버가 모두 다른 환경이기때문에 객체를 전달할때는 객체를 일련의 바이트로 변환하는 직렬화과정이 필요 => 버퍼를 쓰는 이유
        console.log('message toString =====', message.toString())
        const packet = JSON.parse(message)
        console.log(packet)
        wss.clients.forEach((elem) => {
            console.log(elem.readyState)
            elem.send(`${packet.user}님의 메세지: ${packet.msg}`)
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