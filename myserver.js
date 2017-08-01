var http = require("http"); //included node

var PORT1 = 7000;
var PORT2 = 7500;

function handleRequest1(req, res) {
	res.end('You are very independant minded.'+req.url)
}

var server1 = http.createServer(handleRequest1);

server1.listen(PORT1, function() {
	console.log("Server listening on: http://localhost:%s", PORT1)
})

function handleRequest2(req, res) {
	res.end("Which can mean you're stubborn minded."+req.url)
}

var server2 = http.createServer(handleRequest2);

server2.listen(PORT2, function() {
	console.log("Server listening on: http://localhost:%s", PORT2)
})