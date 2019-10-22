
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user_items').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('user_items').insert([
        {
          user_id: 1, 
          photo: 'https://unsplash.com/photos/BZzHWmQUszE', 
          item_name: "computer",
          description: "this is the decription",
          price: 237.22,
          available: true,
        },
        {
          user_id: 2, 
          photo: 'https://unsplash.com/photos/BZzHWmQUszE', 
          item_name: "computer",
          description: "this is the decription",
          price: 235.22,
          available: true,
        },
        {
          user_id: 3, 
          photo: 'https://unsplash.com/photos/BZzHWmQUszE', "item_name": "computer",
          description: "this is the decription",
          price: 233.22,
          available: true,
        },
        {
          user_id: 1, 
          photo: 'https://unsplash.com/photos/BZzHWmQUszE', "item_name": "computer",
          description: "this is the decription",
          price: 237.22,
          available: true,
        },
        {
          user_id: 2, 
          photo: 'https://unsplash.com/photos/BZzHWmQUszE', "item_name": "computer",
          description: "this is the decription",
          price: 235.22,
          available: true,
        },
        {
          user_id: 3, 
          photo: 'https://unsplash.com/photos/BZzHWmQUszE', "item_name": "computer",
          description: "this is the decription",
          price: 233.22,
          available: true,
        },
      ]);
    });
};
