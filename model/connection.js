require('dotenv/config');
const mysql = require("mysql");

const db = mysql.createConnection({
  host:"us-cdbr-east-03.cleardb.com",
  user: "b09cb80e130998",
  password: "defc81a4",
  database: "heroku_7d6e59d42396b7f"
});

db.connect(error => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});

module.exports = db;