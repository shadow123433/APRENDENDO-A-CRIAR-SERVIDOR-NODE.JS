const http = require('http');

const server = http.createServer((req, res) => {
    //header
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1>Ola, mundo!</h1>');
    res.end();
});

server.listen(3000, 'localhost', () => {
    console.log('Servidor rodando na porta 3000');
});