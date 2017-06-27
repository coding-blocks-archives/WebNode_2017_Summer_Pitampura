/**
 * Created by championswimmer on 27/06/17.
 */


function sayHello() {
  console.log('hello');
}

// var timeOutId = setTimeout(sayHello, 8000);

// var interValId = setInterval(sayHello, 1000);


function createSecondLooper(n) {

  return function () {

    for (var j = 0; j < n; j++) {

      console.log(j);

      setTimeout(function () {
        console.log(j);
      }, j * 100)

    }
  }
}

var looper10 = createSecondLooper(10);
looper10();