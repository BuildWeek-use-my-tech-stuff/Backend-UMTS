const express = require('express');

const user_items = require('./user_items-model');

const router = express.Router();

router.get('/', (req, res) => {
  user_items.find()
  .then(item => {
    res.json(item);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get items' });
  });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  user_items.findById(id)
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

router.post('/:id/user-items', (req, res) => {
  const id = req.params;
  const itemData = req.body;

  user_items.findById(id)
  user_items.add(itemData, 'id')
  .then(item => {
    res.status(201).json(item);
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to create new item' });
  });
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  user_items.findById(id)
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

router.delete('/:id', (req, res) => {
  const { id } = req.params;

  user_items.remove(id)
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