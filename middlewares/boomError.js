const boom = require('@hapi/boom');

module.exports = (err, _req, res, _next) => {
  if (!boom.isBoom(err)) return res.status(500).send(`${err.message}`);

  return res.status(err.output.statusCode).send(`${err.output.payload.message}`);
};
