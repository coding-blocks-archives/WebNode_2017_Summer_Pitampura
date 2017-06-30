/**
 * Created by championswimmer on 25/06/17.
 */

let todoList = [];
let todoListElement = null;
/*
{ task: 'task to do'
  done: false
 */
window.onload = function () {

  let btnAdd = document.getElementById('btn-add-todo');
  let btnClean = document.getElementById('btn-clear-done');
  let inputNewTodo = document.getElementById('input-new-todo');
  todoListElement = document.getElementById('list-todos');

  showTodos(todoListElement);

  btnAdd.addEventListener('click', function (ev) {
    addTodo(inputNewTodo.value);
    showTodos();
    inputNewTodo.value = '';
  });

  btnClean.addEventListener('click', deleteDone);

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

function showTodos() {
  if (!todoListElement) {
    return;
  }
  retrieveTodos();
  todoListElement.innerHTML = "";
  for (i in todoList) {
    todoListElement.appendChild(
        createTodoListItem(i, todoList[i].task, todoList[i].done)
    )
  }
}

function setTodoAsDone(ev) {
  let todoId = ev.target.parentElement.getAttribute('data-id')
  todoList[todoId].done = ev.target.checked;
  saveTodos();
  showTodos();
}

function deleteTodo(ev) {
  let todoId = ev.target.parentElement.getAttribute('data-id');
  todoList.splice(todoId,1);
  saveTodos();
  showTodos();
}

function moveTaskUp(ev) {
  let todoId = ev.target.parentElement.getAttribute('data-id');
  todoId = parseInt(todoId);
  todoList.splice((todoId-1),0,todoList.splice(todoId,1)[0]);
  saveTodos();
  showTodos();
}

function moveTaskDown(ev) {
  let todoId = ev.target.parentElement.getAttribute('data-id');
  todoId = parseInt(todoId);
  todoList.splice((todoId+1),0,todoList.splice(todoId,1)[0]);
  saveTodos();
  showTodos();
}

function deleteDone() {
  todoList = todoList.filter(function (item, index, array) {
    return !item.done;
  });
  saveTodos();
  showTodos();
}

function createTodoListItem(id, task, done) {
  let todoListItem = document.createElement('li');
  todoListItem.className = 'list-group-item';
  todoListItem.setAttribute('data-id', id);

  let todoDoneCheckbox = document.createElement('input');
  todoDoneCheckbox.setAttribute('type', 'checkbox');
  todoDoneCheckbox.className = 'col-1';
  todoDoneCheckbox.addEventListener('change', setTodoAsDone);

  let taskSpan = document.createElement('span');
  taskSpan.innerText = task;
  taskSpan.className = 'col-8';

  let taskDeleteButton = document.createElement('i');
  taskDeleteButton.className = 'fa fa-remove col-1 delete';
  taskDeleteButton.addEventListener('click', deleteTodo);

  let moveUpButton = document.createElement('i');
  moveUpButton.className = 'fa fa-chevron-up col-1 icn-move';
  moveUpButton.addEventListener('click', moveTaskUp);

  let moveDownButton = document.createElement('i');
  moveDownButton.className = 'fa fa-chevron-down col-1 icn-move';
  moveDownButton.addEventListener('click', moveTaskDown);

  if (done) {
    taskSpan.className += ' todo-done';
    todoDoneCheckbox.setAttribute('checked', 'true');
  }

  todoListItem.appendChild(todoDoneCheckbox);
  todoListItem.appendChild(taskSpan);
  todoListItem.appendChild(taskDeleteButton);
  todoListItem.appendChild(moveUpButton);
  todoListItem.appendChild(moveDownButton);

  return todoListItem;

}

function addTodo(taskText) {
  let newTodo = {
    task: taskText,
    done: false
  };
  todoList.push(newTodo);
  saveTodos();
}