const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
   
   
   
   
    //header
    res.setHeader('Content-Type', 'text/html');
    
    //conteudo de html
    fs.readFile('./html/pagina1.html', (err, data) => {
        if (err) {
            res.write('<h1>Erro ao carregar a página</h1>');
        } else {
            res.write(data);
        }
        res.end();
    });
});






server.listen(3000, 'localhost', () => {
    console.log('Servidor rodando na porta 3000');
});