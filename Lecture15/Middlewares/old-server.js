/**
 * Created by championswimmer on 09/07/17.
 */
const express = require('express');

const app = express();

function m1(req, res, next) {
  console.log('Middleware 1');
  next();
}
function m2(req, res, next) {
  console.log('Middleware 2');
  next();
}
function m3(req, res, next) {
  console.log('Middleware 3');
}

//app.use(m1)
app.use(m2)

app.get('/', (req, res, next) => {
  console.log("Going to send hello");
  res.body = "Hello";
  res.send(res.body)
  next();
})

app.use(m3)


app.listen(3456, function () {
    console.log("Server started on http://localhost:3456");
});