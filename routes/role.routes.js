const router = require("express").Router();

const roleController = require("../controllers/role.controllers");

router.get("/", roleController.getRoles);
router.get("/:id", roleController.getRole);
router.delete("/:id", roleController.deleteRole);
router.post("/", roleController.createRole);
router.patch("/", roleController.updateRole);
module.exports = router