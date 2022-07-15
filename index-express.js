// Note: esse file é sobre como iniciar um servidor node usando express

const express = require('express')

const app = express()
// Note: sabe o arquivo "index-padrao" né? aquilo é uma aplicação node que inicia o servidor usando o node puro. Essa linha define aquilo, mas com o express então só de usar o express() já é definida aquela aplicação.

const path = require('path');
// Note: path é dependencia nativa do node

const router = express.Router();
// Note: esse método .router serve para definir rotas. As rotas vão ser definidas a baixo.

router.get('/', function(req, res){
    res.sendFile(path.join(__dirname + "/index.html"))
    
    // Note: a resposta a ser dada ao usuário quando ele entra no diretório principal da página, no caso é o diretório localhost
    // Note: .join é um método da dependencia path que pega os arquivos do diretório atual
    // Note: __dirname é uma constante que aponta o diretório onde tá o arquivo
    // Note:  Req seria usado se quisermos pedir algo ao usuário.

})
// Note: o ('/') quer dizer o diretório principal do site. 
// Note: O que o código acima quer dizer: quando o usuário entra no diretório principal do website, execute essa função. Daí vai na função aquilo que tu quer que seja mostrado ao user.
// Note: Assim como em outras rotas a outras coisas a serem mostradas.
// Note: Cada rota é como um evento esperando para ser acionado.


// Note: lembra que express() define uma aplicação node para gerar/ligar o servidor e a guardamos na variável app? chegou a hora de usar a aplicação

app.use('/', router);
// Note: aqui é definido quais rotas devem ser usadas no servidor
// Note: posso definir vários router.get para várias rotas pois são armezanadas no objeto router e ele é passado inteiro aqui

app.listen(process.env.port || 3000, () => {
    console.log("pae é baum")
})
// Note: to dizendo para executar o servidor na pasta padrão e se não tiver definido, na 3000