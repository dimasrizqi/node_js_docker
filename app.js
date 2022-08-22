var express = require('express');
const os = require('os');
var app = express();

 

app.get('/', function (req, res) {

res.send('Hellow world docker js!' + os.hostname());

});

 

app.listen(3000, function () {

console.log('apps running under port 3000!');

});
