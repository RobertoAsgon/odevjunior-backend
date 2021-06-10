const jwt = require('jsonwebtoken');

const handleVerifyToken = (token, next) => {
  try {
    const JWT_SECRET = 'odevjnr';
    return jwt.verify(token, JWT_SECRET);
  } catch (err) {
    return next({ status: 401, message: err.message });
  }
};

const jwtAuthorization = (required) => async (req, _res, next) => {
  const { authorization } = req.headers;
  if (!required) return next();
  if (!authorization) return next({ status: 401, message: 'Usuário não logado' });
  req.user = handleVerifyToken(authorization, next);
  return next();
};

module.exports = jwtAuthorization;
