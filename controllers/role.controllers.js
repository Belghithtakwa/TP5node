const Role = require("../models/role");

const getRoles = async(req, res)=>{
try {
  const roles = await Role.findAll();
  res.status(200).send(roles);
} catch (error) {
  res.status(500).send("error get All roles "+error)
}
}
const getRole = async(req, res)=>{
  try {
    const role = await Role.findOne({where: {id}});
    res.status(200).send(role);
  } catch (error) {
    res.status(500).send("error get role "+error)
  }
}

const createRole = async(req, res)=>{
  const payload = req.body;
  try {
    const role = await Role.create(payload);
    res.status(200).send(role)
  } catch (error) {
    res.status(500).send("error create role" +error);
    
  }
}

const updateRole = async(req, res)=>{
  const payload = req.body;
  const id = req.params.id
  try {
    const role = await Role.update(payload, {where: {id: id}});
    res.status(200).send(role)
  } catch (error) {
    res.status(500).send("error update role" +error);
    
  }
}

const deleteRole = async(req, res)=>{
  const id = req.params.id;
  try {
    const role = await Role.destroy({where: {id: id}});
    res.status(200).send(role)
  } catch (error) {
    res.status(500).send("error delete role" +error);
  }
}

module.exports.getRoles = getRoles;
module.exports.getRole = getRole;
module.exports.createRole = createRole
module.exports.updateRole = updateRole
module.exports.deleteRole = deleteRole