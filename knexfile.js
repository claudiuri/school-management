// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    port: 55000,
    user: 'postgres',
    password: 'postgrespw',
    database: 'school_management',
  },
  migrations: {
    directory: "src/migrations"
  }
};
