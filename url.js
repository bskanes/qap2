//The URL module splits up a web address into readable parts.
var url = require('url');

var adr = 'http://localhost:3000/default.htm?year=2023&month=january';
var q = url.parse(adr, true);

console.log(q.host); //returns 'localhost:3000'
console.log(q.pathname); //returns '/default.htm
console.log(q.search); //returns - ?year=2023&month=january

var qdata = q.query; //returns an object: { year: 2023, month: 'january' }
console.log(qdata.month); //returns 'january'
