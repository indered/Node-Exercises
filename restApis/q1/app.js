var router = require("./router.js");

var http = require("http");
http
  .createServer(function(request, response) {
    response.writeHead(200, {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*"
    });
    router.user(request, response);
  })
  .listen(3000);
console.log("Server running at http://localhost:3000/");
