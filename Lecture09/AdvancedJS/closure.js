/**
 * Created by championswimmer on 25/06/17.
 */



function createCounter(initVal, deltaVal) {

  return {
    getVal() {
      console.log(initVal);
    },
    incVal() {
      initVal += deltaVal;
    },
    decVal() {
      initVal -= deltaVal;
    }
  }
}

function printLoopGen(n) {
  var result = '';

  for (var i = 0; i<n ; i++) {
    //some code here
  }


  function looper() {
    console.log(i);
  }

  return looper
}

var ten5counter = createCounter(10, 5);
var four3counter = createCounter(4,3);
var m = 10;
var printLoop10 = printLoopGen(m);

printLoop10();