const banco = require("./config/banco_consultorioMedico.db");

class EspecialidadeService {
    async cadastrarEspecialidade(tipoEspecialidade) {
        return new Promise((resolve, reject) => {
            banco.run('insert into tabelaMedicosEspec (tipoEspecialidade) values (?)', [tipoEspecialidade], function (err) {
                if (err) {
                    reject(err.message);
                } else {
                    resolve(this.lastID);
                }
            });
        });
    }
}

module.exports = new EspecialidadeService();


