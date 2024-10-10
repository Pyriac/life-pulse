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

const userActions = { add };

module.exports = userActions;
