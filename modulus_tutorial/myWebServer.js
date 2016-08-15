var http = require('http')

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-type': 'application/json'});
    var j = {"name":"Joe", "age":"30"};
    // res.send(j); // doesn't work
    res.end('Hello World\n');
    // res.end('helloworld',j);
}).listen(8080);

console.log('Server running on port 8080');