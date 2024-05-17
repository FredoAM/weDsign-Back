const express = require('express');
const Invitation = require('../models/invitation');

const router = express.Router();

router.get('/', async (req, res) => {
  const invitations = await Invitation.findAll();
  res.json(invitations);
});


router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const invitation = await Invitation.findAll({ where: { id } });
  res.json(invitation);
});


router.post('/', async (req, res) => {
  const { id, name, phone, numberOfGuests, family, attendance, pending, userId, type } = req.body;
  const newInvitation = await Invitation.create({id,  name,phone, numberOfGuests, family, attendance, pending , userId, type });
  res.json(newInvitation);
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, phone, numberOfGuests, family, attendance, pending } = req.body;
  await Invitation.update({ name, phone, numberOfGuests, family, attendance, pending }, { where: { id } });
  res.json({ message: 'Invitation updated successfully' });
});


router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  await Invitation.destroy({ where: { id } });
  res.json({ message: 'Invitation deleted successfully' });
});

module.exports = router;
