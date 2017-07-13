/**
 * Created by championswimmer on 11/07/17.
 */

function longTask () {
  //for example this takes 10 seconds
}


let p = new Promise(function (resolve, reject) {

  try {
    longTask()
    resolve();

  } catch (e) {
    reject();

  }

})

p.then(function () {
  console.log("Long Task was done");
})

p.catch(function () {
  console.log("Long task did not work");
})


