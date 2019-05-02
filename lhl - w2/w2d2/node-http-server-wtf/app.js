const http = require("http");
const PORT = 8080;

// a function to handle the requests and response
function handleRequests(req, res) {
  if( req.url === '/' ) {
    res.end('Wellcme to me beutifer site');
  } else if ( req.url === '/urls' ) {
    res.end('www.lighthouselabs.ca');
  } else {
    res.statusCode = 404;
    res.end('404 biatch');
  }

}

var server = http.createServer(handleRequests);

server.listen(PORT, () => {
  console.log(`server listening on port: ${PORT}`);
})