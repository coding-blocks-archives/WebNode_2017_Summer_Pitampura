/**
 * Created by championswimmer on 09/07/17.
 */
const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log("global middleware"); next();
})

app.use('/info', (req, res, next) => {
    console.log("info path middleware"); next();
})

app.get('/', (req, res) => {
    res.send("Hello")
})
app.get('/info', (req, res, next) => {
    res.send("Here you have some info")
    //next();
})
app.get('/info', (req, res) => {
    console.log("Information");
})
app.all('/info/1', (req, res) => {
    res.send("Information about 1")
})
app.use((req, res, next) => {
    res.send("Nothing to be found here");
})

app.listen(2345, function () {
    console.log("Server started on http://localhost:2345");
});
