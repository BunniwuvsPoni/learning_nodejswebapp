
var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    fs.readFile('./data.txt', function (err, data) {
        //Not sure why callback triggers twice and the resulting data is null

        console.log("Read the file");
        console.log(data);
        console.log("File read completed");

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('Hello, world!');

        //res.writeHead(200, { 'Content-Type': 'text/html' });
        //res.write(data);
        res.end();
    });
}).listen(1337);