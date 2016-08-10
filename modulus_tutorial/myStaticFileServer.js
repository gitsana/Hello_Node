/*** file server, shows everything in the public folder on localhost ***/
var express = require('express'),
    app = express();

app.use(express.static(__dirname + '/public'));

app.listen(8080);

console.log("Listening on port 8080. " +
    "Browse to : " + __dirname + "/public and see any file in there -- for example, localhost:8080/tutorial.txt" );