/**
 * Created by championswimmer on 27/06/17.
 */



var id = setInterval(function () {
  console.log('running');
}, 10);

setTimeout(function () {
  clearInterval(id)
}, 200);




console.log('a');

