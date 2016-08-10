
var fs = require('fs'); // file system

fs.readFile('example_log.txt', function (err, logData) {
    if (err)
        throw err;
    var text = logData.toString();
    console.log(text);

    var results = {};

    var lines = text.split("\n");

    lines.forEach(function(line) {
        var parts = line.split(' ');
        var letter = parts[1]
        var count = parseInt(parts[2])

        if (!results[letter]) {
            results[letter] = 0
        }

        results[letter] += parseInt(count)
    })
    console.log("\nResults:\n")
    console.log(results)
})