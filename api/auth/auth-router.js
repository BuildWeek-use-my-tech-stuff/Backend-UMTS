const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Users = require('../users/users-model');
const secrets = require('../../config/secrets');

// for endpoints beginning with /api/auth
router.post('/register', (req, res) => {
  let { username, password, email, phone } = req.body;
  const hash = bcrypt.hashSync(password, 10); // 2 ^ n
  password = hash;

  Users.add({ username, password, phone, email })
    .then(user => {
      if (username && password) {
        // produce token
        const token = generateToken(user);

        // add token to response
        res.status(200).json({
          message: `Welcome ${username}!`,
          email,
          phone,
          token,
        });
      } else {
        res.status(401).json({ message: 'Invalid Credentials' });
      }
    })
    .catch(error => {
      res.status(500).json({ message: 'cannot add the user', error });
    });
});

router.post('/login', (req, res) => {
  let { username, password } = req.body;

  Users.findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        // produce token
        const token = generateToken(user);

        // add token to response
        res.status(200).json({
          message: `Welcome ${user.username}!`,
          token,
        });
      } else {
        res.status(401).json({ message: 'Invalid Credentials' });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

function generateToken(user) {
  const payload = {
    username: user.username,
    subject: user.id,
  };
  const options = {
    expiresIn: '7d',
  };

  return jwt.sign(payload, secrets.jwtSecret, options);
}

module.exports = router;
