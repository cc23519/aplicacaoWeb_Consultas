const sqlite3 = require('sqlite3').verbose();

const caminhoBanco = "banco_consultorioMedico.db";

const banco = new sqlite3.Database(caminhoBanco, (err) => {
  if (err) {
    console.error('Erro ao abrir o banco de dados:', err.message);
  } else {
    console.log('Conectado ao banco de dados SQLite');
  }
});


module.exports = banco;

