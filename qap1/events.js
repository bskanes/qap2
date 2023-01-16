//Node.js has a built-in module, called "Events", where you can create-, fire-, and listen for- your own events.
//To use the built-in Events module use the require() method. In addition, all event properties and methods are an instance of an EventEmitter object.
var events = require('events');
var eventEmitter = new events.EventEmitter();

//Create an event handler:
var myEventHandler = function () {
  console.log('something just happened');
}

//Assign the event handler to an event:
eventEmitter.on('the happening', myEventHandler);

//Run the event:
eventEmitter.emit('the happening');
