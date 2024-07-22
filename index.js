const express = require('express')
const http = require('http')
const socketio = require('socket.io')

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on('connection', (socket) => {
    console.log('A user connected');
})

app.use('/', express.static(__dirname + '/public'));

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server up and running on PORT: ${PORT}`);
})