import http from 'node:http';

const porta = 3000;

const server = http.createServer();

server.on('request', (req, res) => {
    console.log(`Requisição recebida! ${req.method} ${req.url}`);
    console.log(new Date().toISOString());

    res.statusCode = 201;
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.end("Recurso criado");
});

server.listen(porta, () => {
    console.log(`Servidor ouvindo na porta ${porta}`);
});