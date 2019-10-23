const db = require('../../database/dbConfig');

module.exports = {
    findItems,
    findItemsById,
    createItem,
    removeItem,
    editItem
}

function findItems() {
    return db('items')
    .select('id', 'photo', 'item_name', 'description', 'available', 'price')
  }

function findBy(filter) {
    return db('users').where(filter);
  }

  function findItemsById(id) {
    return db('items')
      .select('id', 'photo', 'item_name', 'description', 'available', 'price')
      .where({ id })
      .first();
  }

  function createItem(item) {
    return db('items').insert(item, 'id')
      .then(ids => ({ id: ids[0] }));
  }

// async function createItem(item) {
//     const [id] = await db('items').insert(item, 'id');
  
//     return findById(id);
//   }

function editItem(id, item) {
  return db('items')
    .where('id', Number(id))
    .update(item);
}

function removeItem(id) {
  return db('items')
    .where('id', Number(id))
    .del();
}