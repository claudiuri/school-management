/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable("teachers", (table) => {
      table.uuid("id").primary();
      table.string("name");
      table.string("cpf").unique();
      table.string("academic_title");
      table.uuid("school_id");
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("teachers");
};
