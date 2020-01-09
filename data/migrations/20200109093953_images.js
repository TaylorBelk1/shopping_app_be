
exports.up = function(knex) {
  return knex.schema.createTable('images', tbl => {
    tbl.increments();
    tbl.integer('item_id')
        .references('id')
        .inTable('item')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
        .notNullable();
    tbl.string('image_name').notNullable();
    tbl.string('image_url').notNullable();
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('images');
};
