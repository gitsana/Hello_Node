var config = require('config');

var dbConfig = config.get('Customer.dbConfig');

console.log(dbConfig);
console.log(config.has('Customer.dbConfig.host'));
console.log(config.has('Customer.dbConfig.whatup'));