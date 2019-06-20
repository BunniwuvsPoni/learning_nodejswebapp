var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    // You have to run this file from command line and not from within VS (not sure why thou)
    fs.readFile('data.txt', function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        res.end();
    });
}).listen(1337);

console.log("end of file");