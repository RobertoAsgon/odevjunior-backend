const cors = require('cors');
const express = require('express');

const app = express();

const {
  registerController,
  loginController,
  updateNameController,
} = require('./controllers/userController');
const auth = require('./middlewares/authentication');
const boomError = require('./middlewares/boomError');

app.use(express.json());
app.use(cors());

// Rotas
app.get('/', (_req, res) => res.send('API is online!'));
app.post('/login', (req, res) => loginController(req, res));
app.post('/register', (req, res) => registerController(req, res));
app.post('/profile', auth(true), (req, res) => updateNameController(req, res));

// Middleware de Erros
app.use(boomError);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('Umbler listening on port %s', port);
});
