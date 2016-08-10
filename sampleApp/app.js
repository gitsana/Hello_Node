var http = require('http')

http.createServer(function (req, res) {
    // res.writeHead(200);

    var body = 'hello world';
    res.writeHead(200, {
        'Content-Length': Buffer.byteLength(body),
        'Content-Type': 'text/plain' });

    var str = "This is dog\n";
    res.write(str, function () {
        console.log("str has been sent.");
    });
    res.end();
}).listen(8080);

console.log("listening on 8080");

