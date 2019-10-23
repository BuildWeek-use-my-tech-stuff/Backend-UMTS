exports.up = function(knex) {
    return knex.schema.createTable('items', tbl => {
        tbl.increments('id').primary()
  
        tbl.string('photo', 10000)
        tbl.string('item_name', 255).notNullable()
        tbl.text('description', 5000).notNullable()
        tbl.decimal('price', 14, 2)
        tbl.boolean('available').defaultTo('true').notNullable()
  
    })
  };
  
  exports.down = function(knex) {
      return knex.schema.dropTableIfExists('items');
  };
  