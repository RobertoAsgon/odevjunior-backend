const express = require('express');
const db = require('../model/config');

const route = express.Router();

route
  .get('/', (_req, res) => res.send(`Teste`))

module.exports = route;
