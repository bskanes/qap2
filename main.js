const http = require('http');
const fs = require('fs');


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
            });
            break;
    }
});
server.listen(3000, 'localhost', () => {
    console.log("listening on port 3000.")
});
