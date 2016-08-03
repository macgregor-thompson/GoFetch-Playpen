/**
 * Created by MacGregorThompson on 6/29/16.
 */
var http = require('http');
var fs = require('fs');
var index = fs.createReadStream('views/index.html');

http.createServer(function(request, response) {
    response.writeHead(200);
    index.pipe(response);
}).listen(8080);