
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('logins').del()
    .then(function () {
      // Inserts seed entries
      return knex('logins').insert([
        {
          id: 1,
          customer_id: 1,
          username: 'test_user1',
          password: 'testpass1'
        },
        {
          id: 2,
          customer_id: 2,
          username: 'test_user2',
          password: 'testpass2'
        },
      ]);
    });
};
