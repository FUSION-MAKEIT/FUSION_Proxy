const http = require('http');

const serverUrl = 'http://localhost:8080'; // Change this to your server URL

const options = {
  method: 'GET',
};

const req = http.request(serverUrl, options, (res) => {
  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    console.log('Response from server:', data);
  });
});

req.on('error', (error) => {
  console.error('Error connecting to server:', error.message);
});

req.end();
