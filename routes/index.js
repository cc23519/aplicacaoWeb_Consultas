const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('menuadmin', { title: 'Meu Projeto Express' });
});

module.exports = router;