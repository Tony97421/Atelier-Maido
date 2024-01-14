const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemControllers module for handling item-related operations
// const itemControllers = require("./controllers/itemControllers");
const categorieController = require("./controllers/categorieController");
const userController = require("./controllers/UserController");
const bijouxController = require("./controllers/bijouxController");
// const commandeController = require("./controllers/commandeController");
const authController = require("./controllers/authController");
// Route to get a list of items
// router.get("/items", itemControllers.browse);
router.get("/users", userController.browse);
router.get("/bijoux/commandes", bijouxController.browse);
router.get("/categorie", categorieController.browse);
// router.get("/commande", commandeController.browse);

// Route to get a specific item by ID
// router.get("/items/:id", itemControllers.read);

// Route to add a new item
// router.post("/items", itemControllers.add);
router.post("/login", authController.login);

/* ************************************************************************* */

module.exports = router;
