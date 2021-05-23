require('dotenv/config');
const mysql = require("mysql");

const config = {
  host:"us-cdbr-east-03.cleardb.com",
  user: "b09cb80e130998",
  password: "defc81a4",
  database: "heroku_7d6e59d42396b7f"
}

const db = mysql.createConnection(config);

db.connect(error => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});

function handleDisconnect(conn) {
  conn.on('error', function(err) {
    if (!err.fatal) {
      return;
    }

    if (err.code !== 'PROTOCOL_CONNECTION_LOST') {
      throw err;
    }

    console.log('Re-connecting lost connection: ' + err.stack);

    connection = mysql.createConnection(config);

    handleDisconnect(connection);
    connection.connect();
  });
}

handleDisconnect(db);

module.exports = db;