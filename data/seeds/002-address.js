const faker = require('faker');

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('address').del()
    .then(function () {
      // Inserts seed entries
      return knex('address').insert([
        {
          id: 1,
          user_id: 1,
          street: faker.address.streetAddress(),
          city: faker.address.city(),
          state: faker.address.stateAbbr(),
          zipcode: faker.address.zipCode()
        },
        {
          id: 2,
          user_id: 2,
          street: faker.address.streetAddress(),
          city: faker.address.city(),
          state: faker.address.stateAbbr(),
          zipcode: faker.address.zipCode()
        },
      ]);
    });
};
