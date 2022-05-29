//create the userRouter and its endpoints
const express=require("express");
const {register,login}=require("../controllers/user");

const userRouter=express.Router();

//endpoint for POST request ==> http://localhost:5000/user/register ==> register
userRouter.post("/register",register);

//endpoint for POST request ==> http://localhost:5000/user/login ==>login
userRouter.post("/login",login);


module.exports=userRouter;