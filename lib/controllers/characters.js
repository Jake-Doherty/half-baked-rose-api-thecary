const { Router } = require('express');
const { Character } = require('../models/Character.js');

module.exports = Router().get('/', async (req, res) => {
  const episodes = await Character.getAll();
  res.json(episodes);
});
