var http = require('http');

var server = http.createServer(function(request, response) {

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello World!");

});

console.log("hallo1");
console.log("hallo2");
console.log("hallo3");
var port = 8080;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
