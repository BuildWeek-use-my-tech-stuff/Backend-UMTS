
exports.up = function(knex) {
    return knex.schema.table('user_items', tbl => {
        tbl.integer('user_id')
        .references('id')
        .inTable('users')
        .unsigned()
        .unique('user_id')
    })
};

exports.down = function(knex) {
    return knex.schema.table('users_items', tbl => {
        tbl.dropForeign('user_id')
    })
};
