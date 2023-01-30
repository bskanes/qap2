const http = require('http');
const fs = require('fs');
const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('home', () => {
    console.log('*homepage visited*');
  });
eventEmitter.on('about', () => {
    console.log('*about page visited*');
  });
eventEmitter.on('contact', () => {
    console.log('*contact page visited*');
  });
eventEmitter.on('products', () => {
    console.log('*products page visited*');
  });
eventEmitter.on('subscribe', () => {
    console.log('*subscribe page visited*');
  });
  
eventEmitter.emit('start');

const server = http.createServer((request, response) => {
    let path = './views/';
    switch(request.url) {
        case '/':
            path += 'home.html';
            fs.readFile(path, function(err, data) {
                if(err) {
                    console.log (err);
                    response.end();
                } else {
                    console.log('Welcome to the homepage!')
                    response.writeHead(response.statusCode, {'Content-Type': 'text/html'})
                    response.write(data);
                    response.end();
                }
                eventEmitter.emit('home');
            });
            break;
        case '/about':
            path += 'about.html';
            fs.readFile(path, function(err, data) {
                if(err) {
                    console.log (err);
                    response.end();
                } else {
                    console.log('This is the about page')
                    response.writeHead(response.statusCode, {'Content-Type': 'text/html'})
                    response.write(data);
                    response.end();
                }
                eventEmitter.emit('about');
            });
            break;
        case '/contact':
            path += 'contact.html';
            fs.readFile(path, function(err, data) {
                if(err) {
                    console.log (err);
                    response.end();
                } else {
                    console.log('dont contact me')
                    response.writeHead(response.statusCode, {'Content-Type': 'text/html'})
                    response.write(data);
                    response.end();
                }
                eventEmitter.emit('contact');
            });
            break;
        case '/products':
            path += 'products.html';
            fs.readFile(path, function(err, data) {
                if(err) {
                    console.log (err);
                    response.end();
                } else {
                    console.log('give me money')
                    response.writeHead(response.statusCode, {'Content-Type': 'text/html'})
                    response.write(data);
                    response.end();
                }
                eventEmitter.emit('products');
            });
            break;
        case '/subscribe':
            path += 'subscribe.html';
            fs.readFile(path, function(err, data) {
                if(err) {
                    console.log (err);
                    response.end();
                } else {
                    console.log('subscribers are cool I guess')
                    response.writeHead(response.statusCode, {'Content-Type': 'text/html'})
                    response.write(data);
                    response.end();
                }
                eventEmitter.emit('subscribe/');
            });
            break;
    }
});
server.listen(3000, 'localhost', () => {
    console.log("listening on port 3000.")
});
