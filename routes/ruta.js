const express = require('express');


const router = express.Router();


router.get('/', async (req, res) => {
    res.send('¡Hola desde mi sprueba en NODE JS JEJE!');
  });


  module.exports = router;