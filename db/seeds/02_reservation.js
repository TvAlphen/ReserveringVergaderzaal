
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('reservation').del()
    .then(function () {
      // Inserts seed entries
      return knex('reservation').insert([
        {reservation_id:1, room_id:1, subject: 'random', start_date:"2017-10-12 11:00:00", end_date:"2017-10-12 12:00:00" },
        {reservation_id:2, room_id:1, subject: 'whatever', start_date:"2017-10-12 13:00:00", end_date:"2017-10-12 15:00:00" },
        {reservation_id:3, room_id:3, subject: 'whatever', start_date:"2017-10-12 13:00:00", end_date:"2017-10-12 15:00:00" }
      ]);
    });
};
