/**
 * Created by championswimmer on 07/07/17.
 */


$(function () {

  $('#addtodo').click(function () {

    let newtodo = $('#newtodo').val();
    let todolist = $('#todolist');

    $.get('/addtodo?task=' + newtodo, function (data) {
      todolist.empty();
      for (task of data) {
        todolist.append(`<li>${task}</li>`)
      }
    })

  })

})