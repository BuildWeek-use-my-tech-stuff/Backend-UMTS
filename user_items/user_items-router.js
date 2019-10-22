const express = require('express');

const user_items = require('./user_items-model');
const users = require('../users/users-model');
const restricted = require('../auth/restricted-middleware');

const router = express.Router();

router.get('/', restricted, (req, res) => {
  user_items.findItem()
  .then(item => {
    res.json(item);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get items' });
  });
});

router.get('/:id', restricted, (req, res) => {
  const { id } = req.params;

  user_items.findItemById(id)
  .then(item => {
    if (item) {
      res.json(item);
    } else {
      res.status(404).json({ message: 'Could not find item with given id.' })
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get items' });
  });
});

router.post('/', restricted, (req, res) => {
  const id = req.params;
  const itemData = req.body;

  users.findBy(id)
  user_items.addItem(itemData, 'id')
  .then(item => {
    res.status(201).json(item);
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to create new item' });
  });
});

router.put('/:id', restricted, (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  user_items.findItemById(id)
  .then(item => {
    if (item) {
      user_items.update(changes, id)
      .then(updatedItem => {
        res.json(updatedItem);
      });
    } else {
      res.status(404).json({ message: 'Could not find item with given id' });
    }
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to update item' });
  });
});

router.delete('/:id', restricted, (req, res) => {
  const { id } = req.params;

  user_items.removeItem(id)
  .then(item => {
    if (item) {
      res.json({ removed: item });
    } else {
      res.status(404).json({ message: 'Could not find item with given id' });
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to delete item' });
  });
});

module.exports = router;