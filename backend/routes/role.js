//create the roleRouter and its endpoints
const express=require("express");
const {createNewRole,createNewPermission,createRolePermission}=require("../controllers/role");

const roleRouter=express.Router();

//endpoint for POST request ==> http://localhost:5000/role/ ==> createNewRole
roleRouter.post("/",createNewRole);

//endpoint for POST request ==> http://localhost:5000/role/permission ==> createNewPermission
roleRouter.post("/permission",createNewPermission);

//endpoint for POST request ==> http://localhost:5000/role/rolepermission ==> createRolePermission
roleRouter.post("/rolepermission",createRolePermission);


module.exports=roleRouter;

