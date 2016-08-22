var url = require('url')
var config = require('config')
const querystring = require('querystring')


// TODO check if formatting is correct
var recaptcha_info = config.get("google_recaptcha")

var verificationUrlObj = url.parse(recaptcha_info.verification_url)
verificationUrlObj.search = "secretKey=" + recaptcha_info.secretKey
verificationUrlObj.search += "&response=rrr123"

var verificationUrlString = url.format(verificationUrlObj)

// console.log(verificationUrlString)
// console.log(verificationUrlObj)

var str = "foo=bar&abc=xyz&abc=123"
var parsedStr = querystring.parse(str)
console.log(parsedStr)
console.log(typeof parsedStr)

var urlSearch = {}
urlSearch.secretCode = "xyz";
urlSearch.response = "response1040";

console.log(urlSearch)
console.log(querystring.stringify(urlSearch))
console.log("-----")
console.log("")