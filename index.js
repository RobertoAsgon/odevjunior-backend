require('dotenv/config');
const express = require('express');
const app = express();
const boom = require('@hapi/boom');
const routes = require('./routes');
const PORT = 3001; 
const cors = require('cors');

app.use(cors());

app.use(express.json());

app.use('/', routes);

app.use((err, _req, res, _next) => {
  if (!boom.isBoom(err)) return res.status(500).send(`${err.message}`);

  res.status(err.output.statusCode).send(`${err.output.payload.message}`);
});

require("./routes/customer.routes.js")(app);

app.listen(process.env.PORT || PORT, console.log(`Aplicação rodando na porta ${PORT}.`));
