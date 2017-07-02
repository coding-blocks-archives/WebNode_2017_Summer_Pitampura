/**
 * Created by championswimmer on 02/07/17.
 */

var obj = {
  a: 10
}

setTimeout(function () {
  obj.a = false
}, 1000);

setInterval(function () {
  console.log(obj.a);
}, 2000)

console.log("data is being read");

module.exports = obj