
exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('snacks').del()
  .then(() => {
    // Inserts seed entries
    return knex('snacks').insert([
      {
        name: 'Grapes',
        image_url: 'https://pbs.twimg.com/media/C4GeCZ8WEAEFgDJ.jpg',
        review_description: 'Eat! Eat! Eat',
        rating: 10,
      },
      {
        name: 'Chocolate Cake',
        image_url: 'http://food.fnr.sndimg.com/content/dam/images/food/fullset/2015/3/3/1/fnd_naked-chocolate-cake-i-am-baker_s4x3.jpg.rend.hgtvcom.406.305.jpeg',
        review_description: 'Yea! Cake for all meals!',
        rating: 9,
      },
      {
        name: 'Ice Cream',
        image_url: 'http://www.americasdairyland.com/assets/images/EWC/Ice-Cream-Hdr.jpg',
        review_description: 'OOH! Best ever!',
        rating: 8,
      }
    ])
  }).then (() => {
    return knex.raw(
      "SELECT setval('snacks_id_seq', (SELECT MAX(id) FROM snacks))"
    )
  })
}
