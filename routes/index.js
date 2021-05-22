const express = require('express');
const db = require('../model/config');

const route = express.Router();

route
  .get('/', (_req, res) => {
    db.query("SELECT * FROM users", function (err, result) {
      if (err) throw err;
      console.log(result);
      res.send(result)
    });
  })

module.exports = route;
