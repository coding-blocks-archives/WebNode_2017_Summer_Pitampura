/**
 * Created by championswimmer on 23/06/17.
 */

let todoItems = [];

window.onload = function () {
  let newtodo = document.getElementById('newtodo');
  let addtodo = document.getElementById('addtodo');

  let todolist = document.getElementById('todolist');

  retrieveTodos();
  setItemArrayToList(todolist, todoItems);

  addtodo.onclick = function () {
    addAndSave(newtodo.value);
    retrieveTodos();
    setItemArrayToList(todolist, todoItems);
  }
};

function addItemToList(list, itemText) {
  let todoItem = document.createElement('li');
  todoItem.innerText = itemText;
  list.appendChild(todoItem);
}

function setItemArrayToList(list, itemArray) {
  list.innerHTML = '';
  for (item of itemArray) {
    addItemToList(list, item)
  }
}

function retrieveTodos () {
  let todosInStore = localStorage.getItem('todos')
  if (todosInStore) {
    todoItems = todosInStore.split(',');
  }
}

function addAndSave(itemText) {
  todoItems.push(itemText);
  localStorage.setItem('todos', todoItems.join(','))
}

