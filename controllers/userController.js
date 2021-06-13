const { RegisterUser, LoginUser } = require('../services/userService');

const loginController = async (req, res) => {
  const response = await LoginUser(req.body);
  console.log('Login Controller Response', response);
  return res.status(200).json(response);
};

const registerController = async (req, res) => {
  const response = await RegisterUser(req.body);
  console.log('Register Controller Response', response);
  return res.status(200).json(response);
};

module.exports = {
  loginController,
  registerController,
};
