const tables = require("../tables");

const browse = async (req, res, next) => {
  try {
    const bijoux = await tables.bijoux.readAll();
    res.json(bijoux);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browse,
};
