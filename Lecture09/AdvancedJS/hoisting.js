/**
 * Created by championswimmer on 25/06/17.
 */

function fun1 () {
  console.log(1);
  fun2()
};



function fun2 () {
  console.log(2);
  fun2();
};
fun1();
fun2();

