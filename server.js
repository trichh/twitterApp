var express = require('express');
var app = express();
var port = 3000;

app.use('/json', require('./routes/home.js')(express));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/client/views/index.html');
});

app.use('/controllers', express.static(__dirname + '/client/controllers'));

var server = app.listen(port, function() {
    console.log("Listening on " + port );
});
