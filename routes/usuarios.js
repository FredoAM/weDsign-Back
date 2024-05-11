const express = require('express');
const Usuario = require('../models/usuario');

const router = express.Router();

router.get('/', async (req, res) => {
  const usuarios = await Usuario.findAll();
  res.json(usuarios);
});


router.post('/', async (req, res) => {
  const { usuario, correo, contraseña } = req.body;
  try {
    const nuevoUsuario = await Usuario.create({ usuario, correo, contraseña });
    res.json(nuevoUsuario);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear usuario', error: error.message });
  }
});

router.post('/buscar', async (req, res) => {
  const { correo, contraseña } = req.body;
  const usuario = await Usuario.findOne({ where: { correo } });

  if (!usuario) {
    return res.status(404).json({ message: 'Usuario no encontrado' });
  }

  if (contraseña === usuario.contraseña) {
    res.json(usuario);
  } else {
    res.status(401).json({ message: 'Credenciales inválidas' });
  }
});
module.exports = router;


  