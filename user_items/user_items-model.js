const knex = require('knex');
const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

module.exports = {
  find,
  findBy,
  findById,
  add,
  update,
  remove,
//   findPostComments,
//   findCommentById,
//   insertComment,
};

function find() {
    return db('user_items')
    .join('users', 'users.id', '=', 'user_items.user_id')
    .select('id', 'username', 'user_id', 'photo', 'item_name', 'description', 'price', 'available');
  }

function findBy(filter) {
    return db('user_items').where(filter);
  }

  function findById(id) {
    return db('user_items')
      .select('id', 'username', 'user_id', 'photo', 'item_name', 'description', 'price', 'available')
      .where({ id })
      .first();
  }

async function add(item, id) {
    const [id] = await db('user_items').insert(item, 'id');
  
    return findById(id);
  }

function update(id, item) {
  return db('user_item')
    .where('id', Number(id))
    .update(item);
}

function remove(id) {
  return db('user_item')
    .where('id', Number(id))
    .del();
}

// function findPostComments(postId) {
//   return db('comments')
//     .join('posts', 'posts.id', 'post_id')
//     .select('comments.*', 'title as post')
//     .where('post_id', postId);
// }

// function findCommentById(id) {
//   return db('comments')
//     .join('posts', 'posts.id', 'post_id')
//     .select('comments.*', 'title as post')
//     .where('comments.id', id);
// }

// function insertComment(comment) {
//   return db('comments').insert(comment).then(ids => ({ id: ids[0] }));
// }