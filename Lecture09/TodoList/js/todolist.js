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

function setTodoAsDone(todoId, doneValue) {
  todoList[todoId].done = doneValue;
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
  todoDoneCheckbox.addEventListener('change', function (ev) {
    setTodoAsDone(ev.target.parentNode.getAttribute('data-id'), ev.target.checked)
  });

  let taskSpan = document.createElement('span');
  taskSpan.innerText = task;
  taskSpan.className = 'col-10';

  if (done) {
    taskSpan.className += ' todo-done'
    todoDoneCheckbox.setAttribute('checked', 'true');
  }

  todoListItem.appendChild(todoDoneCheckbox);
  todoListItem.appendChild(taskSpan);

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