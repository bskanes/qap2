//The console module provides a debugging console that is similar to the JavaScript console mechanism provided by web browsers. 
//There are built-in methods to be used for printing informational, warning, and error messages.
//A Console class with methods such as console.log(), console.error() and console.warn() can be used to write to the terminal.
//The global console can be used without calling require('console')

const apple = 'red'
if (apple == 'red') {
    console.log('man that apple sure is red')
}

const pear = 'red'
if (pear == 'red') {
    console.error("something ain't right...")
}