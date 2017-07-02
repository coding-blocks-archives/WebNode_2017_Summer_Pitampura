/**
 * Created by championswimmer on 02/07/17.
 */


var arr = [1,2];

function changeArr(a) {
  a[0] = 10;
}
console.log(arr);
changeArr(arr)
console.log(arr);


var i = 10;

// eval is evil
function changeInt(x) {
  eval(`${x} = 20;`)
}
console.log(i);
changeInt('i')
console.log(i);