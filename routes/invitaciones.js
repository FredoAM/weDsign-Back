const express = require('express');
const Invitacion = require('../models/invitacion');

const router = express.Router();

router.get('/', async (req, res) => {
  const invitaciones = await Invitacion.findAll();
  res.json(invitaciones);
});


router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const invitacion = await Invitacion.findAll({ where: { id } });
  res.json(invitacion);
});


router.post('/', async (req, res) => {
  const { id, nombre, telefono, cantidadInvitados, familiar, asistencia, pendiente, usuarioId, novio } = req.body;
  const nuevaInvitacion = await Invitacion.create({id,  nombre,telefono, cantidadInvitados, familiar, asistencia, pendiente , usuarioId, novio });
  res.json(nuevaInvitacion);
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { nombre, telefono, cantidadInvitados, familiar, asistencia, pendiente } = req.body;
  await Invitacion.update({ nombre, telefono, cantidadInvitados, familiar, asistencia, pendiente }, { where: { id } });
  res.json({ message: 'Invitación actualizada correctamente' });
});


router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  await Invitacion.destroy({ where: { id } });
  res.json({ message: 'Invitación eliminada correctamente' });
});

module.exports = router;
