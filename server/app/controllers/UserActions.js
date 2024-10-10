const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const tables = require("../../database/tables");

const add = async (req, res, next) => {
  const user = req.body;
  try {
    const insertId = await tables.user.create(user);
    res.status(201).json({ insertId });
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await tables.user.readByEmail(email);
    if (!user) {
      res.sendStatus(401);
    }

    req.user = {
      id: user.id,
      email: user.email,
    };

    const verified = await argon2.verify(user.password, password);

    if (!verified) {
      res.sendStatus(401);
    } else {
      next();
    }
  } catch (error) {
    next(error);
  }
};

const createToken = async (req, res, next) => {
  try {
    const payload = req.user;

    const token = await jwt.sign(payload, process.env.APP_SECRET, {
      expiresIn: "1y",
    });
    req.token = token;
    next();
  } catch (error) {
    next(error);
  }
};

const createCookie = async (req, res, next) => {
  try {
    res.cookie("auth", req.token);
    res.status(201).json({
      message: "Connexion réussie",
      id: req.user.id,
      email: req.user.email,
    });
  } catch (error) {
    next(error);
  }
};

const userActions = { add, login, createToken, createCookie };

module.exports = userActions;
