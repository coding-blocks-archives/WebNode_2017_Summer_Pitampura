/**
 * Created by championswimmer on 09/07/17.
 */
const express = require('express');
const bp = require('body-parser');

const routes = {
    students: require('./routes/students'),
    teachers: require('./routes/teachers')
}

const app = express();

app.use(bp.json())
app.use(bp.urlencoded({extended: true}))

app.use('/students', routes.students)
app.use('/teachers', routes.teachers)


app.listen(5678, function () {
    console.log("Server started on http://localhost:5678");
});