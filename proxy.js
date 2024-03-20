const http = require('http');
const httpProxy = require('http-proxy');

const proxy = httpProxy.createProxyServer({});

const server = http.createServer((req, res) => {
  // Log the request
  console.log('Proxying: ', req.url);
  
  // Proxy the request to the destination
  proxy.web(req, res, { target: req.url });
});

server.listen(8000, () => {
  console.log('Proxy server listening on port 8000');
});
