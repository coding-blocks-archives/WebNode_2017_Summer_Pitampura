/**
 * Created by championswimmer on 14/07/17.
 */

let socket = io();

$(function () {

  let newmsg = $('#newmsg')
  let sendmsg = $('#sendmsg')
  let msglist = $('#msglist')

  sendmsg.click(function () {

    socket.emit('new_message', newmsg.val())

  })

  socket.on('recv_message', (data) => {
    msglist.append($(`<li>${data}</li>`))
  })

})