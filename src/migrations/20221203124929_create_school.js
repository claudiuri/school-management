/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable("schools", (table) => {
      table.uuid("id").primary();
      table.string("name");
      table.string("cnpj").unique();
      table.string("logo");
      table.string("address");
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("schools")
};
