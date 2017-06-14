var express = require('express'),
    fs = require('fs'),
    app = express();
 
var app = express();
 
var ip = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';
 
 
app.get('/', function(req, res) {
    res.send('Hello from NodeJS  at '+ new Date());
});
 
 
app.listen(8080, ip);
 
module.exports = app;
