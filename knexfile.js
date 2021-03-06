//config file for knex

const path = require('path')

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/snacks_crud_dev',
    migrations: {
      directory: path.join(__dirname, 'db', 'migrations')
    },
    seeds: {
      directory: path.join(__dirname, 'db', 'seeds')
    }
  }
}
