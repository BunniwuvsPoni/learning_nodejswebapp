
var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    fs.readFile('data.txt', function (err, data) { // File is still now reading properly
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        res.end();
    });
}).listen(1337);