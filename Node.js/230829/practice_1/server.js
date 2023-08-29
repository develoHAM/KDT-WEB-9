const http = require('http')
const express = require('express')
const SocketIO = require('socket.io')

const app = express()
const PORT = 8000;

app.set('view engine', 'ejs')

const server = http.createServer(app)

const io = SocketIO(server)

app.get('/', (req, res) => {
    res.render('client')
})

io.on('connection', (socket) => {
    // socket.on('btn_hello', (arg) => {
    //     console.log(arg)
    //     socket.emit('btn_message', 'hello: 안녕하세요.')
    // })
    // socket.on('btn_study', (arg) => {
    //     console.log(arg)
    //     socket.emit('btn_message', 'study: 공부합시다!')
    // })
    // socket.on('btn_bye', (arg) => {
    //     console.log(arg)
    //     socket.emit('btn_message', 'bye: 잘가~')
    // })

    socket.on('btn', (arg) => {
        console.log('arg ====', arg)
        socket.emit('backend_message', arg)
    })
})

server.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})