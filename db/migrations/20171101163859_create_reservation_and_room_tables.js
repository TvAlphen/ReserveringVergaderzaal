// https://www.youtube.com/watch?v=EGLi3QQv8bI
exports.up = function(knex, Promise) {
  return knex.schema.createTable('room', function(table) {
    table.integer('room_id').primary();
    table.string('room_name').notNullable();
  })
  .createTable('reservation', function(table) {
    table.integer('reservation_id').primary();
    table.integer('room_id').references('room_id').inTable('room');
    table.string('subject').notNullable();
    table.timestamp('start_date').notNullable();
    table.timestamp('end_date').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('room').dropTable('reservation');
};
