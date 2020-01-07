
exports.up = function(knex) {
  return knex.schema.createTable('cart_items', tbl => {
    tbl.increments();
    tbl.integer('cart_id')
        .references('id')
        .inTable('shopping_cart')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    tbl.integer('product_id')
        .references('id')
        .inTable('item')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    tbl.integer('quantity').notNullable();
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cart_items');
};
