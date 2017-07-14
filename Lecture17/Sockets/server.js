/**
 * Created by championswimmer on 14/07/17.
 */
const express = require('express');
const http = require('http');
const socketio = require('socket.io');

const app = express();
const server = http.Server(app);
const io = socketio(server);

let users = {}
let chats = []

app.use('/', express.static(__dirname + "/public_static"))
app.get('/hello', (r,s) => s.send("hello"))

io.on('connection', (socket) => {
  console.log("New client connected");

  socket.on('login', (username) => {
    console.log('User logged in : ' + socket.id);
    users[socket.id] = username
    socket.emit('logged_in', {username, chats})
  })


  socket.on('new_message', (data) => {
    let chat = users[socket.id] + ": " + data
    chats.push(chat)
    console.log('msg received');
    io.emit('recv_message', chat)
  })

})


server.listen(3245, function () {
    console.log("Server started on http://localhost:3245");
});