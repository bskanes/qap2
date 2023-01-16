//The os module provides operating system-related utility methods and properties. for example:
const os = require('os')

//'os.cpus()' returns information on the CPUs available on your system.
operatingsystemcpu = os.cpus()
console.log(operatingsystemcpu)

//'os.freemem()' returns the number of bytes that represent the free memory in the system.
operatingsystembytes = os.freemem()
console.log('system bytes = ' + operatingsystembytes)

//'os.homedir()' returns the string path of the current user's home directory.
operatingsystemhomedir = os.homedir()
console.log('current users home directory = ' + operatingsystemhomedir)
