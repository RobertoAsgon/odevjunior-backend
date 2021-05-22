require('dotenv/config');
const mysql = require("mysql");

const db = mysql.createConnection({
  host:"localhost",
  user: "root",
  password: "windows",
  database: "blogs_api"
});

module.exports = db;