const express = require("express");
const router = express.Router();
const controllerUser = require("../controllers/user.controllers");

router.get("/", controllerUser.getUsers);
router.get("/:id", controllerUser.getUserById);
router.delete("/:id", controllerUser.deleteUser);
router.post("/", controllerUser.createUser);
router.patch("/", controllerUser.updateUser);
module.exports = router