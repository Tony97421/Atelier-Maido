const tables = require("../tables");

const browse = async (req, res, next) => {
  const { userId } = req.params;
  console.warn(req.params);

  try {
    const commandes = await tables.commandes.readCommandes(userId);

    console.warn(commandes);

    if (commandes == null) {
      res.sendStatus(404);
    } else {
      res.json(commandes);
    }
  } catch (err) {
    next(err);
  }

  const addCommandes = async (req, res, next) => {
    const { userId, bijouxId } = req.body;
    console.warn(req.body);

    try {
      const result = await tables.commandes.createCommandes(userId, bijouxId);
      console.warn(result);

      if (result.affectedRows) {
        res.sendStatus(200);
      } else {
        res.sendStatus(404);
      }
    } catch (err) {
      next(err);
    }
  };

  const destroy = async (req, res, next) => {
    const { userId, bijouxId } = req.params;
    console.warn("req.params", req.params);

    try {
      const result = await tables.commandes.delete(userId, bijouxId);
      console.warn(result);

      if (result.affectedRows) {
        res.sendStatus(200);
      } else {
        res.sendStatus(404);
      }
    } catch (err) {
      next(err);
    }
  };

  module.exports = {
    browse,
    addCommandes,
    destroy,
  };
};
