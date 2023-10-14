const http = require('http');
const express = require('express');

const hostname = '127.0.0.1';
const port = 3080;
const items = [
    'String 1',
    'String 2',
    'String 3',
    'String 4',
  ];


const app = express();


app.get('/', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!');
});

app.get('/search', (req, res) => {
    const searchKey = req.query.q;
    const results = items.filter(item => {
        return item.toLocaleLowerCase().includes(searchKey.toLocaleLowerCase())
    });
    
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.send({"search_results": results});
})

const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});




