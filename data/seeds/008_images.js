
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('images').del()
    .then(function () {
      // Inserts seed entries
      return knex('images').insert([
        {
          id: 1,
          item_id: 1,
          image_name: 'white panda enjoi',
          image_url: 'images/Enjoi-White-Panda.jpg'
        },
        {
          id: 2,
          item_id: 2,
          image_name: 'inependent raw trucks',
          image_url: 'images/Independent-Raw-Truck.jpg'
        },
        {
          id: 3,
          item_id: 3,
          image_name: 'bones 100 red/white',
          image_url: 'images/Bones-100-Ringers.jpg'
        },
        {
          id: 4,
          item_id: 4,
          image_name: 'bones red bearings',
          image_url: 'images/Bones-Reds-Bearings.jpg'
        },
        {
          id: 5,
          item_id: 5,
          image_name: 'mob grip tape',
          image_url: 'images/Mob-Grip-Tape.jpg'
        },
        {
          id: 6,
          item_id: 6,
          image_name: 'mercer botanical longboard',
          image_url: 'images/Mercer-Botanical-Trip.jpg'
        },
        {
          id: 7,
          item_id: 7,
          image_name: 'landyachtz dingy cruiser',
          image_url: 'images/Landyachtz-Dinghy-Dragon.jpg'
        },
        {
          id: 8,
          item_id: 8,
          image_name: 'superior full skateboard',
          image_url: 'images/Superior-Jungle-8.0.jpg'
        },
        {
          id: 9,
          item_id: 9,
          image_name: 'unit skate tool',
          image_url: 'images/unit-skate-tool.jpg'
        },
        {
          id: 10,
          item_id: 10,
          image_name: 'mojo grind rail',
          image_url: 'images/Mojo-Rails-Flat-Bar.jpg'
        },
        {
          id: 11,
          item_id: 11,
          image_name: '3 pack safety',
          image_url: 'static/Triple-Eight-Saver.jpg'
        }
      ]);
    });
};
