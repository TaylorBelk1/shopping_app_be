exports.up = function(knex) {
    return knex.schema.createTable('logins', tbl => {
        tbl.increments();
        tbl
            .integer('customer_id')
            .references('id')
            .inTable('customers')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
        tbl.string('username').unique().notNullable();
        tbl.string('password').notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('logins')
};