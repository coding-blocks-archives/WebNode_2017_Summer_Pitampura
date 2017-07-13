/**
 * Created by championswimmer on 11/07/17.
 */

let s = new Promise(function (resolve, reject) {

  setTimeout(resolve, 1000)
})

setTimeout(function () {
  s.then(function () {
    console.log("Task done");
  })
}, 2000)