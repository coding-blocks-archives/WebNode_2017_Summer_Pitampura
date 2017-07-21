/**
 * Created by championswimmer on 21/07/17.
 */
const express = require('express');

const app = express();

let students = [
  {name: 'Anirban', attendance: 50},
  {name: 'Divyank', attendance: 20},
  {name: 'Sakshi', attendance: 80},
  {name: 'Rahul', attendance: 75},
];

app.set('view engine', 'hbs');
//app.set('views', 'myviews') //to use different folder for views

app.get('/user', (req, res) => {

  res.render('user', {
    username: 'championswimmer',
    name: 'Arnav Gupta'
  })
});

app.get('/students', (req, res) => {
  res.render('students', {
    students: students
  })
});

app.use('/', express.static(__dirname + '/public'));


app.listen(3456, function () {
    console.log("Server started on http://localhost:3456");
});