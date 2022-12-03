/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable("record_cards", (table) => {
      table.uuid("id");
      table.string("student_id");
      table.string("final_grade");
      table.string("is_approved");
      table.string("module");
      table.uuid("class_id");
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("record_cards");
};
