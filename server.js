var express     = require('express');
var app         = express();
var path        = require('path');
var port        = process.env.PORT || 80;
var morgan      = require('morgan'); //use to see requests

//CONFIG
//============================================================

//set the public folder to serve publis assets
app.use(express.static(__dirname + '/public'));

//log all requests to the console
app.use(morgan('dev'));

//ROUTES
//============================================================

//set up our one route to the index.html file
app.get('/', function(req, res){
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

//START THE SERVER
//============================================================
app.listen(port);
console.log('Le port du site est: ' + port);
