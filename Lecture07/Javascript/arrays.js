/**
 * Created by championswimmer on 20/06/17.
 */


var arr = [1,2,3,4, "Asd"];
var arr2 = new Array(1,2, "As");
var arr3 = [1,2,3,4,5,6,7,8,9];
var arr4 = [1,2,3,4,5,6,7,8,9];
var arr5 = [1,'a', true, {a:10}, [3,4]];
var obj1 = {a:10, b:11, c:12};

console.log(arr);
console.log(arr2);
console.log([1,2] == [1,2]);
console.log(arr3.slice(-5, -2));
console.log(arr3);
console.log(arr3.splice(4,2, 10,12,13,14));
console.log(arr3);
console.log(arr4.indexOf(5));
console.log(arr4.concat('a'));
console.log(arr4.concat('a', 'b'));
console.log(arr4.concat(arr2));
console.log(arr4.concat(arr3, arr2));
console.log(arr4.concat([arr3, arr2]));
console.log(arr4.join('-'));
console.log(arr4.join([1,2]));
console.log('------------normal for loop');
for (var i = 0; i < arr5.length; i++) {
    console.log(arr5[i]);
}
console.log('------------for-of loop');
for (var i of arr5) {
    console.log(i);
}
console.log('-------------for-in loop');
for (var i in arr5) {
    console.log(i);
}
console.log('-------------for-in loop');
for (var i in obj1) {
    console.log(i + ":" + obj1[i]);
}
// console.log('------------for-of loop');
// for (var i of obj1) {
//     console.log(i);
// }
console.log('--------- forEach');
var k = arr4.forEach(function (item, index, arr) {
    // console.log(index + ":" + item);
    // console.log(arr);
    arr[index] = item + 1;
});
console.log(arr4);
console.log(k); //undefined

console.log('-------------- map');
var l = arr4.map(Math.sqrt);
console.log(arr4);
console.log(l);

console.log('------------- reduce');
var r = arr4.reduce(function (acc, item, index, arr) {
    console.log(index);
},10);
console.log(r);

var sum = arr4.reduce((a,i) => a+i);

console.log('-----filter');
var f = arr4.filter(function (item, index, array) {
    return item % 2;
});

console.log(f);


var onlynums = arr5.filter((i) => typeof i == 'string');
console.log(onlynums);

var fun = function (a, b) {
    return a + b
}

fun = (a,b) => a+b;

fun = "not so funny";