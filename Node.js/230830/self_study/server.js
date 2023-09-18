const http = require('http')
const express = require('express')
const SocketIO = require('socket.io')

const app = express()
const PORT = 8000

app.set('view engine', 'ejs')

const server = http.createServer(app)
const io = SocketIO(server)

app.get('/', (req, res) => {
    res.render('client')
})

function getSocketsInRoom(roomName) {
    const users = [];
    const clients = io.sockets.adapter.rooms.get(roomName)
    if (clients) {
        clients.forEach(socketid => {
            const user = io.sockets.sockets.get(socketid)
            users.push(user)
        });
    }
    return users
}

function checkDuplicatedUsername(roomName, userName) {
    const users = getSocketsInRoom(roomName)
    const userNamesInRoom = [];
    if (users) {
        users.forEach((socketUser) => {
            userNamesInRoom.push(socketUser.userName)
        })
    }
    return userNamesInRoom.includes(userName)
}

io.on('connection', (socket) => {
    console.log('someone joined')

    socket.emit('greeting', socket.id)

    socket.on('newMessage', (msgData) => {
        console.log(msgData)
        io.to(socket.roomName).emit('newMessage', msgData)
    })

    socket.on('joinRoom', (data, cb) => {
        if(checkDuplicatedUsername(data.roomName, data.userName)) {
            cb({result: false})
        } else {
            socket.join(data.roomName)
            socket.userName = data.userName
            socket.roomName = data.roomName
            cb({result: true})
            socket.to(socket.roomName).emit('newUser', socket.userName)
        }
    })
})

server.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})