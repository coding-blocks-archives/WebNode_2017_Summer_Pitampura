/**
 * Created by championswimmer on 25/06/17.
 */



function printLoopGen(n) {

  return function () {
    for (var i = 0; i < n ; i ++) {
      setTimeout(function () {
        console.log(i);
      }, 10)
    }
  }


}