const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);



io.on('connection', (socket) => {
    console.log('a user connected', socket.id);

    socket.on('msg', (data) => {

        console.log(data);

        socket.emit('msg', {...data, });

        socket.broadcast.emit(data['room'], data['msg']);

        // socket.on(room, (msgs) => {

        //     console.log(msgs);
        //     socket.emit(room, {...msgs, });

        // });

    });

});

server.listen(3000, () => {
    console.log('listening on *:3000');
});