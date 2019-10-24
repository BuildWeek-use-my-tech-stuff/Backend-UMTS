const express = require('express');

const db = require('../../database/dbConfig');
const Items = require('./items-model');
const restricted = require('../auth/restricted-middleware');

const router = express.Router();

router.get('/', restricted, (req, res) => {
    Items.findItems()
    .then(item => {
        res.status(200).json(item)
    })
    .catch(err => {
        res.status(500).json({
            errorMessage: 'Could NOT retrieve items'
        })
    })
})

router.get('/:id', restricted, (req, res) => {
    const id = req.params.id;
    Items.findItemsById(id)
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

router.post('/', restricted, (req, res) => {
    // const id = req.params.id;
    Items.createItem(req.body)
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

  // PUT for items
router.put('/:id', (req, res) => {
  const id = req.params.id;
  const changes = req.body;
  Items.editItem(id, changes)
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
  .catch(error => {
      console.log(error);
      res.status(500).json({
          errorMessage: "The item information can not be updated"
      })
  })
})

  router.delete('/:id', (req, res) => {
    const { id } = req.params;
    
    Items.removeItem(id)
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

// test