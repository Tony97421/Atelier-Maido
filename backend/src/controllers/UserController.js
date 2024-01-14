const tables = require("../tables");
const browse = async (req, res, next) => {
  try {
    const users = await tables.users.readAll();

    res.json(users);
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const newUser = await tables.users.create({
      name,
      email,
      password,
    });
    if (!newUser) {
      res.status(400).json({ message: "Error creating" });
    } else {
      res.status(201).json(newUser);
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browse,
  add,
};
