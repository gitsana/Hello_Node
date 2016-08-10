
var httpMocks = require('node-mocks-http');

var routeHandler = function( request, response ) {

}

var x = function(test) {

    var request = httpMocks.createRequest( {
        method: 'GET',
        url: '/user/42',
        params: { id: 42 }
    });

    var response = httpMocks.createResponse();

    routeHandler(request, response);

};


/*
const calc = require('./calc');

const numbersToAdd = [-10, -20];

const result = calc.sum(numbersToAdd);

console.log(`The result is ${result}`);
*/


