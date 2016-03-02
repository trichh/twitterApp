var express = require('express');
var app = express();
var mongoose = require('mongoose');
var port = 3000;

mongoose.connect('mongodb://localhost/twitter');

app.use('/json', require('./server/api.js')(express));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/client/views/index.html');
});

app.use('/controllers', express.static(__dirname + '/client/controllers'));

app.get('/compare', function(req, res) {
    res.sendFile(__dirname + '/server/results.js');
});

var server = app.listen(port, function() {
    console.log("Listening on " + port );
});