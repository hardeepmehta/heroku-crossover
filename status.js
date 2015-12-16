var util = require('util');
var router = require('express').Router();
var bodyParser = require('body-parser');

var staticStatus = require('./staticStatus').status;

router.use( bodyParser.urlencoded({
    extended: true
}));

router.use( bodyParser.json() ); // For API

router.use( require('cookie-parser')() );

router.get('/status', function( req, res ) {
    res.send( staticStatus );
});


exports.routes = router;