// configuração do mongo
const mongoose = require("mongoose");
// Configura que o mongoose irá usar a API de Promise do Node
mongoose.Promise = global.Promise;
module.exports = mongoose.connect("mongodb://localhost/todo");
