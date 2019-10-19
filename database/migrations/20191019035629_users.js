exports.up = function(knex) {
    return knex.schema.createTable('users', users => {
      users.increments('id');
  
      users
        .string('username', 128)
        .notNullable()
        .unique()
      
        users.string('password', 128)
        .notNullable()

        users.string('phone', 15)

        users.string('email', 128)
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users');
  };
  