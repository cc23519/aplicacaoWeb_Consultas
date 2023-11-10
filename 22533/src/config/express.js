const express = require("express");
const app = express();

const bodyParser = require("body-parser");

const DAO_clientes = require('../app/BD/DAO_clientes');


const expressLayout = require("express-ejs-layouts");
app.set("view engine", "ejs");
app.set("views","./views");
app.use(expressLayout);

// habilitar o body-Parser a receber os dados em JSON
app.use(
   bodyParser.urlencoded({
    extended: true,
   }) 
);

const rotas = require("../app/ROTAS/rotas");
rotas(app);

module.exports = app;