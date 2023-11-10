const app = require("./src/config/express");

//inicializaçao do servidor
app.listen(3000, function () {
    console.log("Servidor NodeJs na porta 3000");
});