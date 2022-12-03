/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable("students", (table) => {
      table.uuid("id").primary();;
      table.string("name");
      table.string("cpf");
      table.string("registration_number").unique();
      table.string("module");
      table.uuid("class_id");
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("students");
};
