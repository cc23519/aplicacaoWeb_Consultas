const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

const database = require('./config/database');
const indexRoute = require('./routes/index');

app.use('/', indexRoute);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
