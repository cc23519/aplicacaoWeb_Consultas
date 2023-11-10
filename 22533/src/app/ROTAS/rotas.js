module.exports = (app) => 
{
//evitar problemas com os cors
app.use((req,res,next) => {
res.header("Acess-Control-Allow-Origin", "*");
next();
});

// criar variavel para associar o caminho fisico da classe
const clientesController = require("../CONTROLLERS/CON_clientes");
// instanciar a variavel do caminho fisico = criando o objeto da classe CON_clientes
const cliController = new clientesController();


app.get("/home", (req,res) => {
  console.log("Utilizando rota /home");
  res.send("Olha a console");
});


app.get("/formularioInclusaoNovoCliente" , (req,res) => {
    console.log("Abrindo cadastro clientes");
    res.render("../views/ejs/addCliente");
});

 
app.get("/listaClientesEJS",cliController.exibeDadosClientesEJS());

app.get("/inclusaoNovoCliente",cliController.clienteNovo());

app.get("/excluirCliente",cliController.excluirClientes());

app.get("/formParaAlterarClientes/:idCliente",cliController.atualizaCliente());

app.get("/salvarDadosClientes/:idCliente",cliController.salvaCliente());


//npm start

}