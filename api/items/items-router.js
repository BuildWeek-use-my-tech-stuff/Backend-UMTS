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
      res.status(201).json(item);
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to create new item' });
    });
  });

  router.put('/:id', restricted, (req, res) => {
    const id = req.params.id;
    const changes = req.body;
    
    Items.editItem(changes, id)
    .then(item => {
      res.status(200).json(item)
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to update item' });
    });
  });

  router.delete('/:id', (req, res) => {
    const { id } = req.params;
    
    Items.removeItem(id)
      .then(deleted => {
        if(id){
          res.json({ deleted, message: `item ${id} was deleted` });
        }
      })
      .catch(err => {
        res.status(500).json({ message: 'Failed to delete item' });
      });  
  });

module.exports = router;