/*
var http = require('http');
var fs = require('fs');


fs.readFile('data.txt', function (err, data) { // File is still not reading properly
    console.log(data);
};
*/

console.log('Hello world!');

var http = require('http');
var port = process.env.PORT || 1337;

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('Hello, world!');
    res.end();
}).listen(port);

console.log('Server has been initiated.');

/*
http.createServer(function (req, res) {
    fs.readFile('data.txt', function (err, data) { // File is still not reading properly
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        res.end();
    });
}).listen(1337);
*/

console.log("end of file");