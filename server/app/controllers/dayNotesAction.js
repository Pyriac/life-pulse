const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const userId = req.body.user_id;
    const dayNotes = await tables.dayNotes.readAll(userId);
    res.json(dayNotes);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const dayNotes = await tables.dayNotes.read(req.params.id);
    if (dayNotes == null) {
      res.sendStatus(404);
    } else {
      res.json(dayNotes);
    }
  } catch (err) {
    next(err);
  }
};

const edit = async (req, res, next) => {
  try {
    const { id } = req.params;
    const dayNotes = req.body;
    await tables.dayNotes.update(id, dayNotes);
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

const add = async (req, res, next) => {
  const dayNotes = req.body;
  console.info(req.body);
  try {
    const insertId = await tables.dayNotes.create(dayNotes);
    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

const destroy = async (req, res, next) => {
  try {
    await tables.dayNotes.delete(req.params.id);

    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

const daynotesAction = {
  browse,
  read,
  edit,
  add,
  destroy,
};

module.exports = daynotesAction;
