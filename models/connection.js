const mysqlx = require('@mysql/xdevapi');
require('dotenv/config');

const config = {
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
      .getSession(config)
      .then(async (session) => {
        schema = await session.getSchema('odevjunior');
        return schema;
      })
      .catch((error) => {
        console.error('Error: ', error);
        process.exit(1);
      }));

module.exports = { connection };
