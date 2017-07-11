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


route.get('/:id', (req, res, next) => {
  if (isNaN(parseInt(req.params.id))) {
    next()
  }
  res.send(students[req.params.id - 1])
})

route.post('/new', (req, res) => {
  students.push({
    name: req.body.name,
    age: req.body.age
  })
  res.redirect(req.baseUrl)
})


// route.get('/redir', (req, res) => {
//   res.redirect(req.baseUrl)
// })


module.exports = route