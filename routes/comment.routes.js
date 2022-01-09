const router = require("express").Router();

const commentController = require("../controllers/comment.controllers");

router.get("/", commentController.getComments);
router.get("/:id", commentController.getComment);
router.delete("/:id", commentController.deleteComment);
router.post("/", commentController.createComment);
router.patch("/", commentController.updateComment);
module.exports = router