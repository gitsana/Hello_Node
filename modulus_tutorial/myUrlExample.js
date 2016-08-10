var url = require('url')
var config = require('config')



// TODO check if formatting is correct
var recaptcha_info = config.get("google_recaptcha")

var verificationUrlObj = url.parse(recaptcha_info.verification_url)
verificationUrlObj.search = "secretKey=" + recaptcha_info.secretKey
verificationUrlObj.search += "&response=rrr123"

var verificationUrlString = url.format(verificationUrlObj)

console.log(verificationUrlString)
console.log(verificationUrlObj)

//console.log(recaptcha_info)

// var urlObject = url.parse(verificationUrl);
// urlObject.search = "?search=sch";
// console.log(urlObject);
//
// var urlString = url.format(urlObject);
// console.log(urlString);
//
// urlObject.search = "search=sch788";
//
// console.log(urlString);