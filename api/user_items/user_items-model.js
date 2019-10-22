
// const db = require('../../database/dbConfig');

// module.exports = {
//   findItem,
//   findBy,
//   findItemById,
//   addItem,
//   updateItem,
//   removeItem,
// //   findPostComments,
// //   findCommentById,
// //   insertComment,
// };

// function findItem(id) {
//     return db('user_items')
//     .join('users', 'users.id', '=', 'user_items.user_id')
//     .where({ user_id: id })
//     .select('id', 'username', 'user_id', 'photo', 'item_name', 'description', 'price', 'available');
//   }

// function findBy(filter) {
//     return db('user_items').where(filter);
//   }

//   function findItemById(id) {
//     return db('user_items')
//       .select('id', 'username', 'user_id', 'photo', 'item_name', 'description', 'price', 'available')
//       .where({ id })
//       .first();
//   }

// // function addItem(item, id) {
// //     return db('user_item')
// //     .join('users', 'users.id', '=', 'user_items.user_id')
// //     .where({ user_id: id })
// //     .insert(item, 'id')
// //     .then(([id]) => {
// //       return getById(id)
// //     })
// //   }

// function addItem(item) {
//   return db('user_items')
//   .insert(item)
//   .then(ids => ({ id: ids[0] }));
// }

// function updateItem(id, item) {
//   return db('user_item')
//     .where('id', Number(id))
//     .update(item);
// }

// function removeItem(id) {
//   return db('user_item')
//     .where('id', Number(id))
//     .del();
// }

// // function findPostComments(postId) {
// //   return db('comments')
// //     .join('posts', 'posts.id', 'post_id')
// //     .select('comments.*', 'title as post')
// //     .where('post_id', postId);
// // }

// // function findCommentById(id) {
// //   return db('comments')
// //     .join('posts', 'posts.id', 'post_id')
// //     .select('comments.*', 'title as post')
// //     .where('comments.id', id);
// // }

// // function insertComment(comment) {
// //   return db('comments').insert(comment).then(ids => ({ id: ids[0] }));
// // }