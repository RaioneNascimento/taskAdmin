exports.up = function(knex) {
  return knex.schema.createTable('tasks', function (table) {
    table.increments();

    table.string('name').notNullable();
    table.string('description').notNullable();
    table.date('dataEntrega').notNullable();
    table.date('dataConclusao').notNullable();

    table.string('user_id').notNullable();

    table.foreign('user_id').references('id').inTable('users');
  });  
};

exports.down = function(knex) {
  return knex.schema.dropTable('tasks');
};
