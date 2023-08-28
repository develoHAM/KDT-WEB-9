const ws = require('ws');
const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('client');
});

const server = app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});

//투표결과 초기화 변수
const votes = {
    typeOne: 0,
    typeTwo: 0,
};

//웹소켓 서버 접속
const wss = new ws.Server({ server });

//socket변수는 접속한 브라우저
wss.on('connection', (socket) => {
    console.log('클라이언트랑 연결이 되었습니다.')
    socket.send(JSON.stringify(votes))

    socket.on('message', (message) => {
        console.log(JSON.parse(message))

        switch (JSON.parse(message).poll) {
            case "A":
                votes.typeOne += 1
                break;
            
            case "B":
                votes.typeTwo += 1
                break;

            default:
                break;
        }

        wss.clients.forEach((elem) => {
            elem.send(JSON.stringify(votes))
        })
    });
    //오류이벤트
    socket.on('error', (err) => {
        console.log('에러가 발생하였습니다', err);
    });
    //접속종료이벤트
    socket.on('close', () => {
        console.log('클라이언트와 연결이 종료됨');
    });
});
