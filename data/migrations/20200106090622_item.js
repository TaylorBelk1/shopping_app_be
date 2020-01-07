
exports.up = function(knex) {
  return knex.schema.createTable('item', tbl => {
    tbl.increments();
    tbl.integer('category_id')
      .references('id')
      .inTable('categories')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
    tbl.string('name').notNullable();
    tbl.float('price').notNullable();
    tbl.text('description', [longtext]).notNullable();
    tbl.text('specs', [longtext]);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('item');
};
