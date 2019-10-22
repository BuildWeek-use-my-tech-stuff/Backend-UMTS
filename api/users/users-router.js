const express = require('express');

const users = require('./users-model');
const restricted = require('../auth/restricted-middleware');

const router = express.Router();

router.get('/', restricted, (req, res) => {
    users.find()
    .then(item => {
      res.json(item);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get users' });
    });
  });

  module.exports = router;