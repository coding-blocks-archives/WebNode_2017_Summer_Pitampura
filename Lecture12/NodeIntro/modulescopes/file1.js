/**
 * Created by championswimmer on 02/07/17.
 */
var f2 = require('./file2')

var a = 10;
this.a= 20;
global.a = 30;

console.log(f2);

setTimeout(function () {
  console.log(f2);
}, 2000)

