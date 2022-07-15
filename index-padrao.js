// Esse file é sobre como ligar um servidor node puro

// Ligar o servidor node (Esse titulo de sessão corresponde ao passo no notion)

const http = require('http');
// Essa dependência é necessária para criar o servidor

const hostname = '127.0.0.1';
// O endereço host onde o server vai rodar

const port = 3000;
// A porta em que o servidor vai rodar
// no ambiente local não tem problema deixar na porta 3000. Mas, em produção é outro esquema.

const server = http.createServer((req, res) => {
    res.statusCode = 200
    // checar documentação desse método
    res.setHeader('Content-Type', 'text/plain')
    // checar documentação desse método
    res.end('ola mundo')
    // checar documentação desse método

})

// Esse método do http cria o servidor e da um retorno que é armazenado nos parametros res e req que passamos. O servidor é criado lá node!

// No PHP basta você executar o apache através do xampp e a aplicação pode ser executada usando o localhost, no node é necessário o seguinte: 

server.listen(port, hostname, () => {
    console.log("servidor rodando")
    // Se o método funcionar o servidor dá essa mensagem ai
})
// esse método da dependência HTTP é o que vai ligar o servidor mesmo. Usando a porta e o endereço informado acima. Essas dependências são nativas do node por isso não é necessário instalar elas. 

// Pra saber o porque dessas callback é só ver a documentação. Mas, em geral, tudo que tá sendo escrito aqui vai ser executado pelo node. O node te dá a receita, tu usa os ingredientes e executa no npm "node <arquivo.js>" e ele lá vai ver o que tu fez, compilar, otimizar e executar lá no backend.
