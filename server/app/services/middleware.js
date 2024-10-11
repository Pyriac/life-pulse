const argon2 = require("argon2");
const jwt = require("jsonwebtoken");

const hashingOptions = {
  type: argon2.argon2id,
  memoryCost: 19 * 2 ** 10,
  timeCost: 2,
  parallelism: 1,
};

const hashPassword = async (req, res, next) => {
  try {
    const { password } = req.body;
    const hashedPassword = await argon2.hash(password, hashingOptions);

    delete req.body.password;

    req.body.hashedPassword = hashedPassword;

    next();
  } catch (error) {
    next(error);
  }
};

const getUserId = async (req, res, next) => {
  try {
    const token = req.cookies.auth;
    const user = await jwt.decode(token);
    req.body.user_id = user.id;
    next();
  } catch (error) {
    next(error);
  }
};

const middleware = { hashPassword, getUserId };

module.exports = middleware;
