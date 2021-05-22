const express = require('express');
const db = require('../model/config');

const route = express.Router();

route
  .get('/', (_req, res) => {
    db.connect(function(err) {
      if (err) throw err;
      res.send("Connected!");
    })
  })

module.exports = route;
