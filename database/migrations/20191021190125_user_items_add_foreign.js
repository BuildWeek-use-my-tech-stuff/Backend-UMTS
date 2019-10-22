
exports.up = function(knex) {
    return knex.schema.table('user_items', tbl => {
        tbl.integer('user_id')
        .references('id')
        .inTable('user_items')
        .unsigned()
    })
};

exports.down = function(knex) {
    return knex.schema.table('users_items', tbl => {
        table.dropForeign('user_id')
    })
};
