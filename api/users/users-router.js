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

  router.get('/:id', restricted, (req, res) => {
    const id = req.params.id;
    posts.findById(id)
    .then(user => {
        if(user){
            res.status(200).json(user)
        } else {
            res.status(404).json({
                message: "user NOT found"
            })
        }
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({
            errorMessage: "The user information can NOT be retreived."
        })
    })
})

  // user_items

  router.get('/:id/user-items', restricted, (req, res) => {
    // const id = req.params.id;
    users.getItems(req.params.id)
    .then(items => {
        if(items){
            res.status(200).json(items)
        } else {
            res.status(404).json({
                message: "The items with the specified ID does NOT exist."
            })
        }
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({
            errorMessage: "The items information could NOT be retreived"
        })
    })
})

  router.post('/:id/user-items', restricted, (req, res) => {
    // const id = req.params.id;
    users.addItem(req.body, 'id')
    .then(item => {
      res.status(201).json(item);
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to create new item' });
    });
  });

  module.exports = router;