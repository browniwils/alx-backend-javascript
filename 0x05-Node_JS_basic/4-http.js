#!/usr/bin/node

const http = require('http');

const PORT = 1245;
const HOST = 'localhost';

const app = http.createServer();

app.on('request', (req, res) => {
  const customRes = 'Hello Holberton School!';
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', customRes.length);
  res.statusCode = 200;
  res.write(Buffer.from(customRes));
});

app.listen(PORT, HOST, () => {
  process.stdout.write(`Server listening at -> http://${HOST}:${PORT}\n`);
});

export default app;
module.exports = app;
