var app = require('express')();
var express = require('express');
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.use(express.static('public'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket) {
  socket.on('keypress', function(key) {
    console.log(key);
    io.emit('keypress', key);
  });
});

http.listen(3000, function() {
  console.log('listening on #:3000');
});
