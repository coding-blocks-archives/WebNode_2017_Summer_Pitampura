/**
 * Created by championswimmer on 09/07/17.
 */
const route = require('express').Router();

let teachers = [
  {name:"Ram", age: 25},
  {name:"Shyam", age: 28},
  {name:"Bhargav", age: 32},
]

route.get('/', (req, res) => {
  res.send(teachers)
})

route.get('/:id', (req, res) => {
  res.send(teachers[req.params.id - 1])
})

module.exports = route