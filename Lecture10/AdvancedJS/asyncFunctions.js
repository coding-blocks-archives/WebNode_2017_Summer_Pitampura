/**
 * Created by championswimmer on 27/06/17.
 */

function doSomething(done) {
  var a = 10;
  console.log("doing");
  // we are doing something
  done(function (reallyAfterDone) {
    var a =11;
    console.log("after done");
    reallyAfterDone(function () {
      console.log("yes we are sure" + a);
      done()
    });
  });
}

doSomething(function (afterDone) {
  var b = 20;
  console.log("done");
  afterDone(function (areYouSure) {
    console.log("really done now" + b);
    areYouSure()
  });
});

