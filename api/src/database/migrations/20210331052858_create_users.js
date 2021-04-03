exports.up = function(knex) {
  return knex.schema.createTable('users', function (table) {
    table.string('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.date('dataNascimento').notNullable();
    table.decimal('cpf', 11).notNullable();
    table.decimal('cep', 8).notNullable();
    table.string('endereco').notNullable();
    table.decimal('numero', 5).notNullable();
    table.string('senha').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
