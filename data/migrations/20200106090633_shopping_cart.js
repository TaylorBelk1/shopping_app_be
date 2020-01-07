
exports.up = function(knex) {
  return knex.schema.createTable('shopping_cart', tbl => {
    tbl.increments();
    tbl.integer('user_id')
        .references('id')
        .inTable('customers')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('shopping_cart');
};
