const express = require('express');

const app = express();

app.get('/', (r,s) => s.send('hello'));

process.env.PORT = process.env.PORT || 1337;

app.listen(process.env.PORT, function () {
    console.log(`Server started on http://localhost:${process.env.PORT}`);
});