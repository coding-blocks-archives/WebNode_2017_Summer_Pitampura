/**
 * Created by championswimmer on 02/07/17.
 */

var data = require('./data');

setTimeout(function () {
  console.log(data.a);
}, 200)
setTimeout(function () {
  console.log(data.a);
  data.a = 22;
}, 1500)

