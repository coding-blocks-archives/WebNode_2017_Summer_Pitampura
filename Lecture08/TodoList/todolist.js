/**
 * Created by championswimmer on 23/06/17.
 */

let todoItems = [];

window.onload = function () {
  let newtodo = document.getElementById('newtodo');
  let addtodo = document.getElementById('addtodo');

  let todolist = document.getElementById('todolist');

  refreshTodos();

  addtodo.onclick = function () {
    addAndSave(newtodo.value);
  }
};

function addItemToList(list, itemIndex, itemText) {
  let todoItem = document.createElement('li');
  todoItem.innerText = itemText;
  todoItem.setAttribute('data-id', itemIndex);
  todoItem.addEventListener('click', deleteSelf);
  list.appendChild(todoItem);
}

function deleteSelf(event) {
  let idToDel = event.target.getAttribute('data-id');
  console.log('Delete = ' + idToDel);
  todoItems.splice(idToDel, 1);
  localStorage.setItem('todos', todoItems.join(','))
  refreshTodos()
}

function refreshTodos() {
  retrieveTodos();
  setItemArrayToList(todolist, todoItems);

}

function setItemArrayToList(list, itemArray) {
  list.innerHTML = '';
  for (index in itemArray) {
    addItemToList(list, index, itemArray[index])
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
  localStorage.setItem('todos', todoItems.join(','));
  refreshTodos();

}

