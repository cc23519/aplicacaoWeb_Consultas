const connection = require("../../config/database");

class DAO_clientes {
    //construtor
    constructor(bd){
        this._bd = bd;
    }

    //select da tabela cliente
    // base para outras coisas
    dadosDosClientesEJS() {
        return new Promise((resolve, reject) => {
            var sql = 'SELECT * FROM CLIENTES2';
            this._bd.query(sql,function(erro,recordset){
                if (erro) {
                console.log(erro);
                return reject("Lista de clientes falhou!");
                }
                resolve(recordset);
            });
        });
    }

   /* async inserirDadosClientes(idClie, nomeClie, cpfClie, dataNiverClie, emailClie){
        try {
            

            const query = 'INSERT INTO CLIENTES2 (idClie, nomeClie, cpfClie, DATE_FORMAT(dataNiverClie,"%d/%m/%Y") as dataNiverClie, emailClie) VALUES (?, ?, ?, ?, ?)';
            const values = [idClie, nomeClie, cpfClie, dataNiverClie, emailClie];

            await connection.query(query, values);

            return { success: true, mensagem: 'Cliente adicionado com sucesso' };
          } catch (error) {
            console.error('Erro ao adicionar cliente:', error);
            return { success: false, mensagem: 'Ocorreu um erro ao adicionar o cliente' };
          }
        } */

        inserirClienteDAO(dados) {
            return new Promise((resolve, reject) => {
                var sql = "INSERT INTO CLIENTES2 VALUES('" + cliente.idClie + "','" + cliente.cpfClie + "','" + cliente.emailClie + "','" + cliente.nomeClie + "','" + cliente.dataNiverClie +"')";
                this._bd.query(sql,function(error,results){
                    if (error) {
                    console.log(error);
                    return reject("Erro ao inserir cliente");
                    }
                    resolve(results);
                    return resolve("Cliente inserido com sucesso");
                });
            });
        }

        excluirClienteDAO(id){
            return new Promise((resolve, reject) => {
                var sql = "DELETE FROM CLIENTES2 WHERE ('" + cliente.idClie + "')";
                this._bd.query(sql,[id],(error,results) =>{
                    if (error) {
                    console.log(error);
                    return reject("Erro ao excluir cliente");
                    }
                    resolve(results);
                    return resolve("Cliente excluido com sucesso");
                  }
                );
              });
            }

        recuperaClienteDAO(dados) {
                return new Promise((resolve, reject) => {
                    var sql = "SELECT * FROM CLIENTES2 WHERE ('" + cliente.idClie + "')";
                    this._bd.query(sql,function(error,results){
                        if (error) {
                        console.log(error);
                        return reject("Erro ao pegar dados do cliente");
                        }
                        resolve(results);
                        return resolve("Dados do cliente resgatado com sucesso");
                        });
                    });
                }

        salvaClienteDAO(dados) {
            return new Promise((resolve, reject) => {
                var sql = "UPDATE CLIENTES2 SET('" + cliente.idClie + "','" + cliente.cpfClie + "','" + cliente.emailClie + "','" + cliente.nomeClie + "','" + cliente.dataNiverClie +"')";
                this._bd.query(sql,function(error,results){
                    if (error) {
                    console.log(error);
                    return reject("Erro ao atualizar cliente");
                    }
                    resolve(results);
                    return resolve("Cliente atualizado com sucesso");
                    });
                });
            }
    

        





} //final do metodo

    
    

module.exports = DAO_clientes;