/**
 * Created by championswimmer on 23/06/17.
 */


window.onload = function () {
  let newtodo = document.getElementById('newtodo');
  let addtodo = document.getElementById('addtodo');

  let todolist = document.getElementById('todolist');

  addtodo.onclick = function () {
    let todo = newtodo.value;
    console.log(todo);

    let todoItem = document.createElement('li');
    todoItem.innerText = todo;
    todolist.appendChild(todoItem);
  }

};

