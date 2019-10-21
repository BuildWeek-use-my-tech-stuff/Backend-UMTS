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
    return db('users').select('id', 'username');
  }

function findBy(filter) {
    return db('users').where(filter);
  }

  function findById(id) {
    return db('users')
      .select('id', 'username')
      .where({ id })
      .first();
  }

async function add(user) {
    const [id] = await db('users').insert(user, 'id');
  
    return findById(id);
  }

function update(id, item) {
  return db('users')
    .where('id', Number(id))
    .update(item);
}

function remove(id) {
  return db('users')
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