
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('categories').del()
    .then(function () {
      // Inserts seed entries
      return knex('categories').insert([
        {
          id: 1,
          name: 'Decks',
        },
        {
          id: 2,
          name: 'Trucks',
        },
        {
          id: 3,
          name: 'Wheels',
        },
        {
          id: 4,
          name: 'Bearings',
        },
        {
          id: 5,
          name: 'Griptape',
        },
        {
          id: 6,
          name: 'Longboards',
        },
        {
          id: 7,
          name: 'Cruisers',
        },
        {
          id: 8,
          name: 'Complete Skateboards',
        },
        {
          id: 9,
          name: 'Skateboard Accessories',
        },
        {
          id: 10,
          name: 'Ramps and Rails',
        },
        {
          id: 11,
          name: 'Helmets and Pads',
        },
      ]);
    });
};
