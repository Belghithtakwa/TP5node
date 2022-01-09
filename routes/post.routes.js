const router = require("express").Router();

const postController = require("../controllers/post.controllers");

router.get("/", postController.getPosts);
router.get("/:id", postController.getPost);
router.delete("/:id", postController.deletePost);
router.post("/", postController.createPost);
router.patch("/", postController.updatePost);
module.exports = router