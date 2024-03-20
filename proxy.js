const http = require('http');

const PORT = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  // Handle incoming requests
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello this is an simple example of an proxy, this will soon be a web proxy, but for now it is an simple  server, with only this response. lol\n');
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Error handling
server.on('error', (error) => {
  console.error('Server error:', error);
});

// Graceful shutdown
process.on('SIGINT', () => {
  console.log('Shutting down server...');
  server.close(() => {
    console.log('Server stopped.');
    process.exit(0);
  });
});
