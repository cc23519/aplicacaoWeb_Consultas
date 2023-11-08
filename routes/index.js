const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', { title: 'Meu Projeto Express' });
});

module.exports = router;