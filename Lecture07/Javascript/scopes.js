/**
 * Created by championswimmer on 20/06/17.
 */


var a = 10;
let aa = 10;
const myconst = [1,2];
myconst.push(3);
console.log(myconst);

function myfun () {
    var b = 20;
    console.log(a);
    console.log(b);
    console.log(aa);
    let ab = 'outside';
    var ac = 'outside';
    const m = 10;
    if (true) {
        var c = 45;
        console.log(m);
        let ab = 'inside';
        var ac = 'inside';
        console.log(c);
        console.log(ab);
        const m = 12;
        console.log(m);
    }
    console.log(ab);
    console.log(ac);
}

// var myVar = 'some value';
//
// function redeclare() {
//     var myVar = 'wow';
//     let myVar = myVar + ' that was not there'; //errors
//     console.log(myVar);
// }
//
//
myfun();
//
// redeclare();