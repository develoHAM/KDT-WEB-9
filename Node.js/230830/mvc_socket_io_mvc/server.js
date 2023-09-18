const http = require('http');
const express = require('express');
const SocketIO = require('socket.io');

const PORT = 8000;
const app = express();

const server = http.createServer(app);
const io = SocketIO(server);

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});

const socketRouter = require('./routes/socket');
socketRouter(io);

server.listen(8000, () => {
    console.log(`http://localhost:${PORT}`);
});
