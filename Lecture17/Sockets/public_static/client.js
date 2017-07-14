/**
 * Created by championswimmer on 14/07/17.
 */

let socket = io();

$(function () {

  let newmsg = $('#newmsg')
  let sendmsgbtn = $('#sendmsg')
  let msglist = $('#msglist')
  let loginbtn = $('#login')
  let username = $('#username')
  let loginframe = $('#login-container')
  let chatframe = $('#chat-container')

  if (sessionStorage.getItem('username')) {
    socket.emit('login', sessionStorage.getItem('username'))
  }

  loginbtn.click(function () {
    socket.emit('login', username.val())
  })

  socket.on('logged_in', (data) => {
    chatframe.show();
    loginframe.hide();
    console.log('logged_in');
    for (let chat of data.chats) {
      msglist.append($(`<li>${chat}</li>`))
    }
    sessionStorage.setItem('username', data.username)
  })

  sendmsgbtn.click(function () {
    socket.emit('new_message', newmsg.val())
  })

  socket.on('recv_message', (data) => {
    console.log('msg recvd');
    msglist.append($(`<li>${data}</li>`))
  })

  socket.on('disconnect', () => {
    chatframe.hide();
    loginframe.show();
    msglist.empty();
  })

})