exports.up = function(knex) {
  return knex.schema.createTable('user_items', tbl => {
      tbl.increments('id')

      tbl.string('photo', 500)
      tbl.string('item_name', 255).notNullable()
      tbl.text('description', 5000).notNullable()
      tbl.decimal('price', 14, 2)
      tbl.boolean('available').defaultTo(false)
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('user_items');
};
