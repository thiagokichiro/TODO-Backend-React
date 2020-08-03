const port = 3003;

// faz o parser do corpo da requisição, por ex, formulário
const bodyParser = require("body-parser");
// servidor web que roda no node
const express = require("express");
const server = express();
const allowCors = require("./cors");

// sempre que chegar uma requisição que usa o padrão urlencoded (de submissão de formulários)
// todas as requisições passarão por essa URL e será feito o parser
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(allowCors);

server.listen(port, function () {
  console.log(`BACKEND is running on port ${port}. By Thiago Kichiro`);
});

module.exports = server;
