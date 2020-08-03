const restful = require("node-restful");
// node-restful fornece uma API Rest praticamente pronta
const mongoose = restful.mongoose;

// mapeamento
const todoSchema = new mongoose.Schema({
  // descrição da tarefa
  description: { type: String, required: true },
  // se concluiu ou não a tarefa
  done: { type: Boolean, required: true, default: false },
  // data de registro da tarefa
  createdAt: { type: Date, default: Date.now },
});

module.exports = restful.model("Todo", todoSchema);
