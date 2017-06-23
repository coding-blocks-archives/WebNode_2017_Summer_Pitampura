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

function addItemToList(list, itemIndex, itemObj) {
  let todoItem = document.createElement('li');
  todoItem.innerText = itemObj.task;
  todoItem.setAttribute('data-id', itemIndex);
  if (itemObj.done) {
    todoItem.style.textDecoration = 'line-through'
  }
  todoItem.addEventListener('click', doneSelf);
  list.appendChild(todoItem);
}

function doneSelf(event) {
  let idToDone = event.target.getAttribute('data-id');
  console.log('Done = ' + idToDone);
  todoItems[idToDone].done = true;
  saveTodos();
  refreshTodos()

}

function deleteSelf(event) {
  let idToDel = event.target.getAttribute('data-id');
  console.log('Delete = ' + idToDel);
  todoItems.splice(idToDel, 1);
  saveTodos();
  refreshTodos()
}

function refreshTodos() {
  retrieveTodos();
  setItemArrayToList(todolist, todoItems);

}

function saveTodos() {
  localStorage.setItem('todolist', JSON.stringify(todoItems));
}

function setItemArrayToList(list, itemArray) {
  list.innerHTML = '';
  for (index in itemArray) {
    addItemToList(list, index, itemArray[index])
  }
}

function retrieveTodos () {
  let todosInStore = localStorage.getItem('todolist')
  if (todosInStore) {
    todoItems = JSON.parse(todosInStore);
  }
}

function addAndSave(itemText) {
  todoItems.push({
    task: itemText,
    done: false
  });
  saveTodos();
  refreshTodos();

}

