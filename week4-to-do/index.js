const express = require('express');
const app = express();

// route handlers
app.get('/', function(req, res){
    res.send('Hello world');
});

app.get('/asd', function(req, res){
    res.send("hello from asd point");
});

app.post('/asd', function(req, res){
    res.send("hello from asd point");
});

app.listen(3000) //which port