const { connection } = require('./connection');

const selectUserBy = async (param) => {
  try {
    await connection()
      .then((schema) => schema
        .getTable('users')
        .select(['id', 'name', 'email', 'password', 'role_access', 'created_date', 'ip_address'])
        .where(`${param} = :${param}`)
        .bind(`${param}`, param)
        .execute())
      .then((results) => results.fetchOne())
      .then(([id, name, email, password, roleAccess, createdDate, ipAddress]) => ({
        id, name, email, password, roleAccess, createdDate, ipAddress,
      }));
  } catch (error) {
    return error;
  }
};

const insertNewUser = async (param) => {
  try {
    const { name, email, password, role_acces, created_date, ip_address } = param;
    await connection()
      .then((db) => db
        .getTable('users')
        .insert(['name', 'email', 'password', 'role_acces', 'created_date', 'ip_address'])
        .values(name, email, password, role_acces, created_date, ip_address)
        .execute());
    return { name, email, password, role_acces, created_date, ip_address };
  } catch (error) {
    return error;
  }
};

module.exports = {
  selectUserBy,
  insertNewUser,
};
