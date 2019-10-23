const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const authRouter = require('../api/auth/auth-router');
const usersRouter = require('../api/users/users-router');
const itemsRouter = require('../api/items/items-router');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api/auth', authRouter);
server.use('/api/users', usersRouter);
server.use('/api/items', itemsRouter)

server.get('/', (req, res) => {
    res.send("It's alive!");
  });
  
  module.exports = server;