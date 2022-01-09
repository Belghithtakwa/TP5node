const Comment = require("../models/post");

const getComments = async(req, res)=>{
try {
  const comments = await Comment.findAll();
  res.status(200).send(comments);
} catch (error) {
  res.status(500).send("error get All comments "+error)
}
}
const getComment = async(req, res)=>{
  try {
    const comment = await Comment.findOne({where: {id}});
    res.status(200).send(comment);
  } catch (error) {
    res.status(500).send("error get comment "+error)
  }
}

const createComment = async(req, res)=>{
  const payload = req.body;
  try {
    const comment = await Comment.create(payload);
    res.status(200).send(comment)
  } catch (error) {
    res.status(500).send("error create comment" +error);
    
  }
}

const updateComment = async(req, res)=>{
  const payload = req.body;
  const id = req.params.id
  try {
    const comment = await Comment.update(payload, {where: {id: id}});
    res.status(200).send(comment)
  } catch (error) {
    res.status(500).send("error update comment" +error);
    
  }
}

const deleteComment = async(req, res)=>{
  const id = req.params.id;
  try {
    const comment = await Comment.destroy({where: {id: id}});
    res.status(200).send(comment)
  } catch (error) {
    res.status(500).send("error delete comment" +error);
  }
}

module.exports.getComments = getComments;
module.exports.getComment = getComment;
module.exports.createComment = createComment
module.exports.updateComment = updateComment
module.exports.deleteComment = deleteComment