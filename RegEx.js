//RegEx
let emailRegexPattern =
/[a-z0-9\._%+!$&*=^|~#:?]+@([a-z0-9\-]+\.){1,}([a-z]{2,16})/gi
let testString = 'admin@gmail.com'
console.log(emailRegexPattern.test(testString))//if string matching the pattern, it will return true, else false.

//search and exatract
let regexDobPattern = /[0-9]{2}-[0-9]{2}-[0-9]{4}/gi;
let testStringDob = 'DOB: 30-07-1997 | 12-08-1998'
let myDob= testStringDob.match(regexDobPattern)
console.log(myDob)
console.log(testStringDob.match(regexDobPattern))

//searching [0-9]
let regexDigit = /[0-9]/gi
let testDigit = '124432oiccsa.'
console.log(testDigit.match(regexDigit))