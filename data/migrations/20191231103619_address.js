
exports.up = function(knex) {
    return knex.schema.createTable('address', tbl => {
        tbl.increments();
        tbl.string('street').notNullable();
        tbl.string('street_two');
        tbl.string('city').notNullable();
        tbl.string('state').notNullable();
        tbl.string('zipcode').notNullable();
        tbl
            .integer('user_id')
            .references('id')
            .inTable('customers')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('address');
};
