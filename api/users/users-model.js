
const db = require('../../database/dbConfig');

module.exports = {
  // users
  find,
  findBy,
  findById,
  add,
  update,
  remove,
  
  // user_items
  getItems,
  // getItemById,
  addItem,
  updateItems,
  // deleteItems
};

// users
function find() {
    return db('users').select('id', 'username', 'email', 'phone');
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

// user_items
function getItems(id){
  return db('user_items')
  // .join('users', 'user.id', '=', 'u.user_id')
  // .select('user_items.*')
  .where({ user_id: id })
}

// function addItem(item, id){
//   return db('user_items')
//   .join('users', 'users.id', '=', 'user_items.user_id')
//   .where({ user_id: id })
//   .insert(item, 'id')
//   .then(([ id ]) => {
//       return findById(id)
//   })
//}
// jfnb

function addItem(item) {
  return db('user_items').insert(item, 'id')
    .then(ids => ({ id: ids[0] }));
}

function updateItems(item, id){
  const { id }= req.params.id;
  const changes = req.body;
  return db('user_items')
  .where({ user_id: id })
  .update(item)
}

  // getItems,
  // getItemById,
  // addItem,
  // updateItems,
  // deleteItems

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