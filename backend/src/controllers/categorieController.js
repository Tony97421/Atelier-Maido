// Import access to database tables
const tables = require("../tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all items from the database
    const categorie = await tables.categorie.readAll();

    // Respond with the items in JSON format
    response.json(categorie);
  } catch (error) {
    // Pass any errors to the error-handling middleware
    next(error);
  }
};

module.exports = {
  browse,
};
