const sql = require('mssql');

const configuracao = {
    user: 'BD23519',
    password: 'BD23519',
    server: 'regulus.unicamp',
    database: 'BD23519',
};

const banco = new sql.ConnectionPool(configuracao);

banco.connect().then((pool) => {
    console.log('Conectado ao banco de dados MSSQL');
}).catch((err) => {
    console.error('Erro ao conectar ao banco de dados:', err);
});

module.exports = banco;
