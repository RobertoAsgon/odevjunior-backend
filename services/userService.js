const jwt = require('jsonwebtoken');

const { createUser, selectUserBy } = require('../models/userModel');

const { JWT_SECRET } = process.env;

const jwtConfig = {
  expiresIn: '1d',
  algorithm: 'HS256',
};

const RegisterUser = async (param) => {
  const response = createUser(param);
  return response;
};

const LoginUser = async (param) => {
  const { email } = param;
  const response = selectUserBy(email);
  return response;
};

module.exports = {
  LoginUser,
  RegisterUser,
};
