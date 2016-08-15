var express = require('express');
var app = express();

app.set('view engine', 'html');

app.use(express.static('public'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index1.html');
})

var server = app.listen(8080, function () {
    var host = server.address().address
    var port = server.address().port

    console.log(host);
    console.log(__dirname);
    console.log("Example app listening at http://%s%s", host, port);
})