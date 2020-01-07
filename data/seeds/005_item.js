
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('item').del()
    .then(function () {
      // Inserts seed entries
      return knex('item').insert([
        {
          id: 1,
          category_id: 1,
          name: 'Enjoi Whitey Panda Wide Logo 8.0" Skateboard Deck',
          price: 54.95,
          description: 'Get down with the best panda in the skate game on the Enjoi Whitey Panda Wide Logo 8.0" Skateboard Deck.',
          specs: 'Enjoi Whitey Panda Wide Logo 8.0" Skateboard Deck.|Custom Enjoi "whitey panda" graphic.|Note: Grip tape not applied to board.|Tested and approved by the Enjoi team!|Width: 8.0".|Length: 31.9".|Wheelbase: 14".|Imported.|Note: Colors and graphics may vary slightly from image.',
        },
        {
          id: 2,
          category_id: 2,
          name: 'Independent Raw 139 Stage 11 Skateboard Truck',
          price: 21.95,
          description: 'Get the same high quality feel and responsiveness you have come to expect from Independent Trucks with the Independent Raw 139 Stage 11 skateboard trucks but with some new added features.',
          specs: 'Independent Raw 139 Stage 11 skateboard truck. Raw silver colorway. Independent truck sizing is 139. Hanger is 137mm wide for boards 7.75" to 8.25" wide. Axle is 8". 4140 Chromoly steel axles. Upgraded version of Stage 10 trucks. Lightweight hollow-body hanger. Grade 8 kingpins. New precision hole drilled baseplate for improved balance and durability. High center of gravity. Imported. Trucks sold individually. Order quantity of 2 for a set.',
        },
        {
          id: 3,
          category_id: 3,
          name: 'Bones 100 Ringers 54mm Red & White Skateboard Wheels',
          price: 25.00,
          description: 'Customize your board to include Bones 100 Ringers 54mm Red and White Skateboard Wheels as part of your go-to setup. Made from the brands classic original formula, this set of wheels boast amazing speed and impeccable flat spot resistance.',
          specs: '100 Ringers 54mm Red and White Skateboard Wheels from Bones. 53mm size 100a durometer hardness rating. Bones Original Formula for reduced flat spots. High rebound for speed. UV protected. Custom Bones logo graphics on wheel walls. Set of four Bones wheels. 100% urethane. Made in the USA.',
        },
        {
          id: 4,
          category_id: 4,
          name: 'Bones Reds Skateboard Bearings',
          price: 18.95,
          description: 'The Bones Reds are essential when youre looking for quality bearings that offer maximum speed and durability. These reliable bearings have a pre-lubricated design using Bones Speed Cream and a removable high speed nylon ball cage for easy cleaning when they get gnarly.',
          specs: 'Bones Reds skate bearings. Pre-Lubricated with Bones Speed Cream. Removable high speed nylon ball cage. Non-contact, removable rubber shield. Bones skate rated design and quality. Quantity of 8 bearings. Imported.',
        },
        {
          id: 5,
          category_id: 5,
          name: 'Mob Grip Tape',
          price: 6.95,
          description: 'Bubbleproof application. Exclusive grit-binding process for grip that will not wear out. Tear-resistant "plastic plywood" backing that trims evenly every time. Super sticky adhesive that will not peel up in extreme heat or cold.',
        },
        {
          id: 6,
          category_id: 6,
          name: 'Mercer Botanical Trip 40" Double-Drop Longboard Complete',
          price: 174.95,
          description: 'For a stable ride from cruises to hill bombs, grab the Mercer Botanical Trip 40" Double-Drop Longboard Complete. A classic double-drop construction offers a lowered center of gravity for additional stability, while also making it much easier on your legs during longer cruise sessions. Topped off with a wild nature-inspired graphic, this complete is worthy of all your summer adventures.',
          specs: 'Botanical Trip 40" Double-Drop Longboard Complete from Mercer. 7-ply maple construction. Medium concave, drop-through, drop deck. 180mm reverse kingpin Compound trucks. Abec 5 bearings. 70mm 80a Mercer wheels. Black grip tape applied to top of board with custom koi graphic. Width: 9.25". Length: 40". Wheelbase: 31". Note: Comes fully assembled and ready to ride right out of the box! Note: Colors and graphics may vary slightly from image. Imported.'
        },
        {
          id: 7,
          category_id: 7,
          name: 'Landyachtz Dinghy Dragon 28.5" Cruiser Complete',
          price: 134.95,
          description: 'Get your go-to cruiser and ditch slayer, the Landyachtz Dinghy Dragon 28.5" Cruiser Complete is a compact super-tool. Coming with all of Landyachtz signature premium parts from 63mm, 78a Fatty Hawgs for excellent roll-speed and grip, to Polar Bear 105mm street trucks for stable truck stalls, grinds and hill bombs. Mellow "W" concave offers a comfortable ride that fits within the arch of the riders foot and a durable, 7-ply construction will have you shredding this set up for seasons to come. Finished with a steep pitched and squared off tail for massive pop, this board can ride it all in convenient, compact fashion.',
          specs: 'Dinghy Dragon 28.5" Cruiser Complete from Landyachtz. For every Landyachtz skateboard sold, Landyachtz will plant a tree! 7-ply maple construction with wheel wells to prevent wheel bite. Mellow "W" concave. Shaped deck with flat square tail and short oblong nose. Black grip tape applied to top. Fatty Hawgs 63mm 78a wheels. Polar Bear 105mm trucks with 1/4" rubber riser pads. Bear Space Balls Abec 7 bearings. Width: 8". Length: 28.5". Wheelbase: 18.5". Imported. Comes fully assembled and ready to ride right out of the box! Note: Colors and graphics may vary slightly from image.'
        },
        {
          id: 8,
          category_id: 8,
          name: 'Superior Jungle 8.0" Skateboard Complete',
          price: 89.95,
          description: 'Boost your ollies and flip tricks with the Superior Jungle 8.0" skateboard complete. Tensor brand trucks offer an extremely stable ride and the 52mm Superior wheels are perfect for park riding. Finished with a mild concave profile for a stable and predictable feel under foot, this set up is an ideal learning tool for all types of riding styles.',
          specs: 'Jungle 8.0" Skateboard Complete from Superior. Jungle leaf print logo graphic. Mild concave. Tapered and mellow kick tails. Seven-ply maple construction. 5.25" Tensor trucks. 52mm Superior wheels. Abec 3 bearings. Black grip tape applied to the deck with red logo script. Width: 8.0". Length: 31.5". Wheelbase: 14.0". For every tree harvested Superior plants two new trees! Comes completely pre-assembled and ready to shred right out of the box. Graphics and stains may vary slightly from the image. Imported.'
        },
        {
          id: 9,
          category_id: 9,
          name: 'Unit Skate Tool',
          price: 11.95,
          description: 'A multi-function 5-in-1 skateboard tool with everything you need to assemble your complete and keep it finely tuned with a tough plastic construction.',
          specs: 'All-in-one skateboard tool. 9/16, 3/8, and 1/2" sockets. Removable slide out allen and Phillips head screwdriver. Item comes in assorted colors of black, pink, orange, and blue. We will ship the first available color. Imported.'
        },
        {
          id: 10,
          category_id: 10,
          name: 'Mojo Rails Flat Bar Black Grinding Rail',
          price: 229.95,
          description: "Turn any ride able surface into a park with the Mojo Rails Flat Bar Black Grinding Rail. This 6' 4'' rail is constructed entirely from steel for durability, while its merely 30 pound construction keeps it travel ready. Multiple height options help it adjust to your skills as you progress or adjust to the ground accordingly. Grab a premium learning tool to improve your board sports with the Mojo Rails Flat Bar Black Grinding Rail.",
          specs: "Mojo Rails Flat Bar Black Grinding Rail. Square, flat bar construction. Black powder coat finish.Two leg inserts with adjustable height. 6' 4'' long. Steel construction. Some assembly required. Note: Ships within US only.Note: This product is made to order, please allow up to a week of assembly time added to the estimated received date! Made in the USA."
        },
        {
          id: 11,
          category_id: 11,
          name: 'Triple Eight Saver Series 3-Pack Box',
          price: 34.95,
          description: "Save some body parts, and some dough. Protecting your wrists, knees and elbows is now more convenient and affordable than ever. The Saver Series 3-Pack Box from Triple Eight comes with Wristsavers, Kneesavers and Elbowsavers, everything you need to keep you protected below the head.",
          specs: "Includes wristsavers, kneesavers, and elbowsavers. EVA foam padding.High grade durable fabrics. Imported.Wristsaver: Tough, 4-way stretch nylon mesh provides a snug fit. High-density, impact-resistant molded ABS splints on front and back for support. Shock absorbing EVA foam secured between support splints and wrist for cushioning. Knee/Elbowsaver: Lightweight, shock absorbing, ventilated EVA foam provides cool air flow and limits perspiration. Ergonomically designed for comfort. Wide, reinforced elastic straps ensure a secure fit."
        },
      ]);
    });
};
