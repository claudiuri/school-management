const { randomUUID } = require("crypto")

class Repository {
  constructor(knex, tableName) {
    this.knex = knex;
    this.tableName = tableName;
  }

  async create(item) {
    const [newItem] = await this.knex(this.tableName)
      .insert({ id: randomUUID(), ...item }).returning("*");

    return [newItem];
  }

  async delete(id) {
    const [deleted] = await this.knex(this.tableName)
      .where({ id })
      .delete()
      .returning("*")

    return deleted
  }

  async update(item) {
    const [updatedItem] = (await this.knex(this.tableName)
      .where({ id: item.id })
      .update({
        ...item,
      })
      .returning("*"));

    return updatedItem;
  }

  async get(id) {
    return this.knex(this.tableName).select().where({ id }).first();
  }

  async select() {
    return this.knex(this.tableName).select();
  }
}

module.exports = Repository