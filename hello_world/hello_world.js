console.log('Hello world!');

var http = require('http');
var dt = require('./myfirstmodule');
var port = process.env.PORT || 1337;

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('Hello, world!');
    res.write('The date and time are currently: ' + dt.myDateTime());
    res.end();
}).listen(port);

console.log('Server has been initiated.');