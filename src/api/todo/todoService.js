const Todo = require("./todo");

// define métodos de uma API padrão
Todo.methods(["get", "post", "put", "delete"]);
/* Em caso de update: 
    new: garante que retorna o registro atualizado,
    runValidators: valida as informações obrigatórias para atualização
*/
Todo.updateOptions({ new: true, runValidators: true });

module.exports = Todo;
