const connection = require("../../config/database");
const bd = require("../../config/database");
const DAO_clientes = require("../BD/DAO_clientes");

class CON_clientes
{

exibeDadosClientesEJS()
{
    return function(req,res){
        const DAO_clientes = new DAO_clientes(bd);
        DAO_clientes.dadosDosClientesEJS()
         .then(res.redirect('/listaClientes'))
         .catch(erro => console.log(erro));
    }
}

  
  clienteNovo()
  {
      return function(req,res){
            dados = req.body;
            console.log(dados);
            const DAO_clientes = new DAO_clientes(bd);
            
            DAO_clientes.inserirClienteDAO(dados)
             .then(res.redirect('/listaClientesEJS'))            
             .catch(erro => console.log(erro));
     }
  }

  //nesse metodo ele vai pegar o id da pessoa e mandar para o comando sql
  excluirClientes(){
    return function(req,res){
      dados = req.body;
      const idDoCliente = req.params.id;
      DAO_clientes.excluirClienteDAO(idDoCliente)
       .then(res.redirect('/listaClientes'))
       .catch(erro => console.log(erro));
  }
  
} 

atualizaCliente(){
    return function(req,res){
          dados = req.body;
          const idDoCliente = req.params.id;   
          DAO_clientes.recuperaClienteDAO(idDoCliente,dados)
          .then(() => {
            res.redirect('/listaClientes'); 
        })
        .catch(erro => console.log(erro));
}
   }



salvaCliente()
{
    return function(req,res){
          const dados = req.body;  
          DAO_clientes.salvaClienteDAO(dados)
          .then(() => {
            res.redirect('/salvarDadosCliente'); // Redireciona após a operação de salvamento bem-sucedida.
        })
   }
}




} // end da classe

module.exports = CON_clientes;