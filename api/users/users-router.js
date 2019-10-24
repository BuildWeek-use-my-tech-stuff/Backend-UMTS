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
    users.findById(id)
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

router.get('/user-items/:id', restricted, (req, res) => {
  const id = req.params.id;
  users.getItemById(id)
  .then(item => {
    if(item){
      res.status(200).json(item)
  } else {
      res.status(404).json({
          message: "item NOT found"
      })
  }
  })
  .catch(error => {
      console.log(error)
      res.status(500).json({
          errorMessage: "The item information can NOT be retreived."
      })
  })
})

  router.post('/:id/user-items', restricted, (req, res) => {
    // const id = req.params.id;
    users.addItem(req.body)
    .then(item => {
      res.status(201).json({
        message: 'item was successfully created!',
        item
      });
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to create new item' });
    });
  });

  router.put('/user-items/:id', restricted, (req, res) => {
    const id = req.params.id;
    const changes = req.body;
    users.updateItems(changes, id)
    .then(item => {
      if(item){
        res.status(200).json({
          message: 'item was successfully updated!',
          item
        })
    } else if(!id) {
        res.status(404).json({
            message: "The item with the specified ID does not exist."
        })
    } else if(!req.body.item_name || !req.body.description){
        res.status(400).json({
            errorMessage: "Please provide a item name and description"
        })
    }
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to update new item' });
    });
  });

  router.delete('/user-items/:id', (req, res) => {
    const { id } = req.params;
    
    users.deleteItems(id)
      .then(item => {
        if(id && item){
          res.json({ item, message: `item ${id} was deleted` });
        } else if(!item) {
            res.status(404).json({
                message: 'The item with the specified ID does not exist'
            })
        }
      })
      .catch(err => {
        res.status(500).json({ message: 'Failed to delete item' });
      });  
  });

  module.exports = router;