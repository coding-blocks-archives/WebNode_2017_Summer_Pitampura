/**
 * Created by championswimmer on 25/06/17.
 */

function Todo(task, done) {
  this.task = task;
  this.done = done;
  this.toggleDone = function () {
    this.done = !this.done
  }
}

var fun = function () {

}

Todo.myFun = function () {
  console.log(this);
};

Todo.a = 10;

var obj = {};



var todo = new Todo('Some Task', false);
var otherTask = new Todo('More things to do', true);

Todo('Other task', true);

console.log(todo.done);
todo.toggleDone();
console.log(todo.done);