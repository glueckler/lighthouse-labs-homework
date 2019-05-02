module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      database: 'famous_people',
      user:     'slimbean',
      password: ''
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};