/**
 * Created by championswimmer on 09/07/17.
 */
const route = require('express').Router();

let students = [
  {name:"Abhinav", age: 15},
  {name:"Raghav", age: 16},
  {name:"Kushal", age: 18},
]

route.get('/', (req, res) => {
  res.send(students)
})

route.get('/:id', (req, res) => {
  res.send(students[req.params.id - 1])
})

route.post('/new', (req, res) => {
  students.push({
    name: req.body.name,
    age: req.body.age
  })
  res.send({success: true})
})

module.exports = route