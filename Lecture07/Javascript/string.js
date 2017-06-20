/**
 * Created by championswimmer on 20/06/17.
 */

console.log('Hello');

var integer = 10;
var myfloat = 10.1;
var mystring = "This is a string! Some more text is here too";
var mybool = false;

var myobj = {
    key1: "value1",
    key2: 10,
    key3: true

};

var myarr = ["asdsa", 12, {a:10}, true];
function findAllIndexesOf(str, char) {
    var idx = -2;
    var pos = [];
    while(idx != -1) {
        idx = str.indexOf(char, idx);
        if (idx != -1) pos.push(idx)
        else break;
        idx++;
    }
    console.log(pos);
}
console.log(mystring.concat("Another String"));
console.log(mystring.split(" "));
console.log(mystring.substr(3 //start
    , 5//length
));
console.log(mystring.substring(4 //start
    , 8 //end
));
console.log(mystring.charAt(8));
console.log(mystring.indexOf("!"));
console.log(mystring.indexOf("s", mystring.indexOf("s") + 1));
console.log(mystring.lastIndexOf("s", 55));
console.log(mystring.includes("his", 8));
console.log(" asdsad ".trim() + "asdas");


console.log(mystring);

mystring = mystring.concat("Other stuff");
