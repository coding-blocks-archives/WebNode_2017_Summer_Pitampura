/**
 * Created by championswimmer on 11/07/17.
 */

$(function () {

  let newtodoel = $('#newtodo')
  let addtodobtn = $('#addtodo')
  let todolist = $('#todolist')

  function refreshTodos() {
    todolist.empty();
    $.get('/todos',
      function (data) {
        for (todo of data) {
          todolist.append($(`<li> ${todo.task}</li>`))
        }
      }
    )
  }

  refreshTodos();

  addtodobtn.click(function () {

    $.post('/todos',
      {task: newtodoel.val()},
      function (data) {
      if (data.success) {
        refreshTodos();
      }
      }
    )

  })



})
