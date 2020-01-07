
exports.up = function(knex) {
    return knex.schema.createTable('customers', tbl => {
      tbl.increments();
      tbl.string('first_name', 128).notNullable();
      tbl.string('last_name', 128).notNullable();
      tbl.string('email', 128).unique().notNullable();
      tbl.string('phone_number', 10).notNullable();
    })
  };

  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('customers')
  };