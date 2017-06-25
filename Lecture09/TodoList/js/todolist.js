/**
 * Created by championswimmer on 25/06/17.
 */

let todoList = [];
/*
{ task: 'task to do'
  done: false
 */

window.onload = function () {

  let btnAdd = document.getElementById('btn-add-todo');
  let btnClean = document.getElementById('btn-clear-done');
  let inputNewTodo = document.getElementById('input-new-todo');
  let todoListElement = document.getElementById('list-todos');

  btnAdd.addEventListener('click', function (ev) {
    addTodo(inputNewTodo.value);
    showTodos(todoListElement);
  })

};

function retrieveTodos() {
  let savedTodos = localStorage.getItem('todos');
  if (savedTodos) {
    todoList = JSON.parse(savedTodos);
  }
}

function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todoList))
}

function showTodos(todoListElement) {
  retrieveTodos();
  todoListElement.innerHTML = "";
  for (todo of todoList) {
    let todoListItem = document.createElement('li');
    todoListItem.className = 'list-group-item';
    todoListItem.innerText = todo.task;
    todoListElement.appendChild(todoListItem)
  }
}

function addTodo(taskText) {
  let newTodo = {
    task: taskText,
    done: false
  };
  todoList.push(newTodo);
  saveTodos();
}