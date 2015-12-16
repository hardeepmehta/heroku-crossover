var express = require('express');
var status = require('./status');

var socketFunction = require('./socketFunction');
var app = express();

app
  .use(express.static( './build' ))
  .use( status.routes );

var server = app.listen(3000, function(){
    console.log('Open browser at http://localhost:3000');
});

var io = require('socket.io').listen( server );

io.sockets.on('connection', socketFunction);