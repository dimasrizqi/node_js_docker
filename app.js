var express = require('express');

var app = express();

 

app.get('/', function (req, res) {

res.send('Hellow world docker js!');

});

 

app.listen(3000, function () {

console.log('apps running under port 3000!');

});
