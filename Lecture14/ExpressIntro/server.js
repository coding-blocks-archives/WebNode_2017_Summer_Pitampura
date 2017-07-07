/**
 * Created by championswimmer on 07/07/17.
 */
const express = require('express')
const path = require('path')

const app = express();

todos = [];

app.get('/', function (req, res, next) {
  res.send("Hello")
})

app.get('/greet', function (req, res, next) {
  console.log(req.query);

  let name = req.query.name;
  res.send("Greetings to " + name)
})

app.get('/addtodo', function (req, res, next) {
  todos.push(req.query.task)

  res.send(todos)

})

app.use('/public', express.static(path.join(__dirname, 'public_static')))

app.listen(8000)