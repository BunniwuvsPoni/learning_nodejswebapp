/*
var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    fs.readFile('./fsopen/demofile1.html', function (err, data) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(data);
    res.end();
}).listen(1337);
*/

var http = require('http');

http.createServer(function (req, res) {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write('Hi');
        res.end();
}).listen(1337);

/*
'use strict';
var http = require('http');
var port = process.env.PORT || 1337;

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World - this is the initial default page\n');
}).listen(port);
*/