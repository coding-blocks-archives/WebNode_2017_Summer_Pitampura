/**
 * Created by championswimmer on 25/06/17.
 */
fun1();
var fun1 = function () {
  console.log(1);
  fun2();
}

var fun2 = function () {
  console.log(2);
  fun1();
}