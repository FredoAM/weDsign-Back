const express = require('express');
const User = require('../models/user');

const router = express.Router();

router.get('/', async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});


router.post('/', async (req, res) => {
  const { user,email,password } = req.body;
  try {
    const newUser = await User.create({ user,email,password });
    res.json(newUser);
  } catch (error) {
    res.status(500).json({ message: 'Error creating user', error: error.message });
  }
});

router.post('/search', async (req, res) => {
  const { email , password } = req.body;
  const user = await User.findOne({ where: { email } });

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  if (password === user.password) {
    res.json(user);
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});
module.exports = router;


  