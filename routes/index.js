const express = require('express');
const db = require('../model/connection');
const route = express.Router();

route
  .get('/', (_req, res)  => {
    db.query("SELECT * FROM users", (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send(result)
    });
  })

module.exports = route;
