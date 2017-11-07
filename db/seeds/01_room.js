
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('room').del()
    .then(function () {
      // Inserts seed entries
      return knex('room').insert([
        {room_id:1, room_name:'vergaderzaal 1'},
        {room_id:2, room_name:'vergaderzaal 2'},
        {room_id:3, room_name:'vergaderzaal 3'},
        {room_id:4, room_name:'vergaderzaal 4'}
      ]);
    });
};