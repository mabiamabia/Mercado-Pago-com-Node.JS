var http = require("http");

http.createServer(function(requisicao, resposta){
    resposta.end("<h1>Bem vinda ao meu site!</h1><br><h4>Acesse o nosso site: </h4>")
}).listen(3000);

console.log("Meu servidor esta rodando!");