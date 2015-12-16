var express = require('express');
var status = require('./status');

var socketFunction = require('./socketFunction');
var app = express();

var directory = './public';

if(  process.argv ) {
    process.argv[2] === '--production' ? (directory = './build', console.log('Serving production environment...')): console.log('Serving development environment...');
}

app
  .use(express.static( directory ))
  .use( status.routes );

var server = app.listen(3000, function(){
    console.log('Open browser at http://localhost:3000');
});

var io = require('socket.io').listen( server );

io.sockets.on('connection', socketFunction);