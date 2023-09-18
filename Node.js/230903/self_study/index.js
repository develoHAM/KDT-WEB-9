const express = require('express')
const http = require('http')
const SocketIO = require('socket.io')
const db = require('./models')
const router = require('./routes')

const app = express()
const PORT = 8000;
const server = http.createServer(app)
const io = SocketIO(server)


app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: true}))
app.use(express.json())

// const socketRouter = require('./routes/socket.js')
// socketRouter(io)

app.use('/', router)

app.use('*', (req, res) => {
    res.render('404')
})

db.sequelize.sync({force: true}).then(() => {
    server.listen(PORT, () => {
        console.log(`http://localhost:${PORT}`)
    })
})