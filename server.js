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
var port = process.env.PORT || 8080
server.listen(port, () => {
    console.log('listening on *:port');
});
