// cria umm middleware : next
module.exports = function (req, res, next) {
  // permite que as requisições venham de origem diferente
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  // continua o fluxo da aplicação
  next();
};
