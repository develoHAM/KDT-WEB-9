const http = require('http')
const express = require('express')
const SocketIO = require('socket.io')

const app = express()
const PORT = 8000

const server = http.createServer(app)
const io = SocketIO(server)

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('client')
})

io.on('connection', (socket) => {

    socket.on("join", (res) => {
        socket.room = res;
        socket.join(res);
        socket.broadcast.to(res).emit('newParty', '새로운 사용자가 입장하였습니다')
    })

    socket.on("message", (res) => {
        socket.broadcast.to(socket.room).emit('chat', res)
    })
})

server.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})