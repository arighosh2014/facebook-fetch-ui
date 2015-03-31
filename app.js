var https = require('https');
var express = require('express');
var app = express();
var fs = require('fs');

var options = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
};

app.use('/app', express.static(__dirname + '/app'));

var server = https.createServer(options, app);

server.listen(8000);
