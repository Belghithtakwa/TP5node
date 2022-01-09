const Post = require("../models/post");

const getPosts = async(req, res)=>{
try {
  const posts = await Post.findAll({include: ['userId']});
  res.status(200).send(posts);
} catch (error) {
  res.status(500).send("error get All posts "+error)
}
}
const getPost = async(req, res)=>{
  try {
    if(req.query.comments == "non")
    const post = await Post.findOne({where: {id}});
    else 
    const post = await Post.findOne(id, {include: ['comments']});
    res.status(200).send(post);
  } catch (error) {
    res.status(500).send("error get post "+error)
  }
}

const createPost = async(req, res)=>{
  const payload = req.body;
  try {
    const post = await Post.create(payload);
    res.status(200).send(post)
  } catch (error) {
    res.status(500).send("error create post" +error);
    
  }
}

const updatePost = async(req, res)=>{
  const payload = req.body;
  const id = req.params.id
  try {
    const post = await Post.update(payload, {where: {id: id}});
    res.status(200).send(post)
  } catch (error) {
    res.status(500).send("error update post" +error);
    
  }
}

const deletePost = async(req, res)=>{
  const id = req.params.id;
  try {
    const post = await Post.destroy({where: {id: id}});
    res.status(200).send(post)
  } catch (error) {
    res.status(500).send("error delete post" +error);
  }
}

module.exports.getPosts = getPosts;
module.exports.getPost = getPost;
module.exports.createPost = createPost
module.exports.updatePost = updatePost
module.exports.deletePost = deletePost