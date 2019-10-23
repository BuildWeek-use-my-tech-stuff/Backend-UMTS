
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('items').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('items').insert([
        {
          photo: 'https://unsplash.com/photos/BZzHWmQUszE', 
          item_name: "computer",
          description: "this is the decription",
          price: 237.22,
          available: true,
        },
        {
          photo: 'https://unsplash.com/photos/BZzHWmQUszE', 
          item_name: "computer",
          description: "this is the decription",
          price: 25.12,
          available: true,
        },
        {
          photo: 'https://unsplash.com/photos/BZzHWmQUszE', "item_name": "computer",
          description: "this is the decription",
          price: 33.25,
          available: true,
        },
        {
          photo: 'https://unsplash.com/photos/BZzHWmQUszE', "item_name": "computer",
          description: "this is the decription",
          price: 23.55,
          available: true,
        },
        {
          photo: 'https://unsplash.com/photos/BZzHWmQUszE', "item_name": "computer",
          description: "this is the decription",
          price: 535.00,
          available: true,
        },
        {
          photo: 'https://unsplash.com/photos/BZzHWmQUszE', "item_name": "computer",
          description: "this is the decription",
          price: 2.22,
          available: true,
        },
      ]);
    });
};
