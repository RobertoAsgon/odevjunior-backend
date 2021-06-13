const mysqlx = require('@mysql/xdevapi');
require('dotenv/config');

const databaseConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  socketPath: '/var/run/mysqld/mysqld.sock',
};

let schema;

const connection = async () => (
  schema
    ? Promise.resolve(schema)
    : mysqlx
      .getSession(databaseConfig)
      .then(async (session) => {
        schema = await session.getSchema(process.env.DB_NAME);
        return schema;
      })
      .catch((error) => {
        console.error('Error connection database: ', error);
        process.exit(1);
      }));

module.exports = { connection };
