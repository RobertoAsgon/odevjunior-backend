require('dotenv/config');
const express = require('express');
const app = express();
const boom = require('@hapi/boom');
const PORT = 3001; 
const cors = require('cors');

app.use(cors());

app.use(express.json());

require("./routes/user.routes.js")(app);

app.use((err, _req, res, _next) => {
  if (!boom.isBoom(err)) return res.status(500).send(`${err.message}`);

  res.status(err.output.statusCode).send(`${err.output.payload.message}`);
});

app.listen(process.env.PORT || PORT, console.log(`Aplicação rodando na porta ${PORT}.`));
