import http from 'node:http';

const porta = 3000;

const server = http.createServer();

server.on('request', (req, res) => {
    console.log(`Requisição recebida! ${req.method} ${req.url}`);
    console.log(new Date().toISOString());

    res.statusCode = 201;
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.end(JSON.stringify({ status: "ok" }));
    /*
    Não vou remover o res.end pra não comprometer o funcionamento do código, mas resumindo:
    Sem o res.end, o navegador fica carregando eternamente. A conexão fica pendente, onde o
    cliente fica esperando indefinidamente por uma resposta que o servidor nunca entrega.
    Depois de certo tempo, o navegador dá timeout e desiste.
    */
});

server.listen(porta, () => {
    console.log(`Servidor ouvindo na porta ${porta}`);
});