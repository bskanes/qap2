//The path module provides utilities for working with file and directory paths.
//The path module varies based on the operating system on which a Node.js application is running.

const path = require('path')

//The path.basename() method returns the last portion of a path
const dirbasename = path.basename('/whatever/coolbeans/yay.html')
console.log('basename = ' + dirbasename)

//The path.parse() method returns an object whose properties represent significant 
//elements of the path. will have to use path of file location for test!
const parse = path.parse('C:\Users\Brian/Homework/qap1/text.txt')
console.log('elements of path =')
console.log(parse)
