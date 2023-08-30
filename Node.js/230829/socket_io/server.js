const http = require('http')
const express = require('express')
const SocketIO = require('socket.io')


const app = express()
const PORT = 8000;

//http서버
const server = http.createServer(app)
//socket서버
const io = SocketIO(server)

//view engine
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('client')
})

app.get('/chat', (req, res) => {
    res.render('chat')
})

io.on('connection', (socket) => {
    console.log('조인 전', socket.rooms)
    socket.on('join', (res) => {
        //채팅방 생성하는 방법은 join(방아이디) 사용. 방이 존재하면 그 방으로 접속
        socket.room = res;
        socket.join(res)
        console.log('조인 후', socket.rooms)
        //broadcast는 나를 제외한 전체사용자(브라우저)에게 메세지 전달
        socket.broadcast.to(res).emit('create', '새로운 브라우저가 입장하였습니다')
        const roomInfo = io.sockets.adapter.rooms.get(socket.room)
        console.log(roomInfo)
    })

    socket.on('message', (res) => {
        //io.to(특정방아이디).emit(이벤트) : 특정방의 전체 사용자에게 메세지 전달
        console.log('socket.room ====', socket.room)
        io.to(socket.room).emit('chat', res)
    })

    socket.on('leave', () => {
        socket.leave(socket.room)
        const roomInfo = io.sockets.adapter.rooms.get(socket.room)?.size
        console.log(roomInfo)
    })



    socket.on('greeting', (arg, cb) => {
        // console.log('arg ====', arg);
        arg['condition'] = 'good'
        cb(arg)
    })

    // socket.on('click', (arg, cb) => {
    //     console.log(arg)
    //     cb('good')
    // })

    socket.on('form_message', (arg) => {
        console.log(arg)
        socket.emit("backend_message", arg)
        console.log(io.sockets)
    })


})

//서버
server.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})
