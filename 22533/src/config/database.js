const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: 'regulus.cotuca.unicamp.br',
    user: 'BD22533',
    password: 'BD22533',
    database: "BD22533",
});

connection.connect(function (erro){
    if(erro)
    console.log("ERRO na conexão com o BD22533");
    else
    console.log("conexão com o banco BD22533 realizada");
});

module.exports = connection;