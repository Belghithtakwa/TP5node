const User = require("../models/user");



const getUsers = async(req, res)=>{
try {
  const users = await User.findAll()
  res.status(200).send(users);
} catch (error) {
  res.status(500).send("error get Users" +error)
}
}

const getUserById = async(req, res)=>{
  const id = req.params.id
 const posts =  req.query.posts
 let user
  try {
    if (posts == "non"){
       user = await User.findOne(id, {include: ['role']})}
    else {
      user =  await User.findOne(id, {include: ['role', 'posts']})
    }
    res.status(200).send(user)
  } catch (error) {
    res.status(500).send("error get user by id", +error)
  }
}

const createUser = async(req, res)=>{
  const payload = req.body;
  try {
    const user = await User.create(payload);
    res.status(200).send(user)
  } catch (error) {
    res.status(500).send("error create user" +error);
    
  }
}

const updateUser = async(req, res)=>{
  const payload = req.body;
  const id = req.params.id
  try {
    const user = await User.update(payload, {where: {id: id}});
    res.status(200).send(user)
  } catch (error) {
    res.status(500).send("error update user" +error);
    
  }
}

const deleteUser = async(req, res)=>{
  const id = req.params.id;
  try {
    const user = await User.destroy({where: {id: id}});
    res.status(200).send(user)
  } catch (error) {
    res.status(500).send("error delete user" +error);
  }
}

module.exports.getUsers = getUsers;
module.exports.deleteUser = deleteUser;
module.exports.getUserById = getUserById;
module.exports.createUser = createUser;
module.exports.updateUser = updateUser;

