/**
 * Created by championswimmer on 11/07/17.
 */

function asyncHello() {
  return new Promise (function (resolve, reject) {

    setTimeout(resolve, 1000, "Hello")
  })
}

// asyncHello().then((data) => {
//   console.log(data);
// })

async function readFileAsync () {
  return readFileSync()
}

async function getHello  () {
  let h = await readFileAsync();
  console.log(h);
}

getHello();