const http = require('http');
const { getAllBlocks } = require('./controllers/career');

const server = http.createServer((req, res) => {
  if(req.url === '/' && req.method === 'GET') {
    getAllBlocks(req, res);
  } else {
    res.writeHead(404, {'Content-type': 'application/json'});
    res.end(JSON.stringify({ message: 'Route not found'}));
  }
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
