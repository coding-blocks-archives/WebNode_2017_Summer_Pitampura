/**
 * Created by championswimmer on 11/07/17.
 */


async function sayHello() {
  return "hello"
}

//
// function sayHello2() {
//   return new Promise(function (resolve, reject) {
//     resolve(sayHello())
//   })
// }


let h = sayHello()

// do some tasks here

h.then((data) => {
  console.log(data);
})