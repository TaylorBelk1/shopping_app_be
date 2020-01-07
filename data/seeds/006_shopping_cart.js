
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('shopping_cart').del()
    .then(function () {
      // Inserts seed entries
      return knex('shopping_cart').insert([
        {
          id: 1,
          user_id: 1
        },
      ]);
    });
};
