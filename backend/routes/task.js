//create the taskRouter and its endpoints
const express=require("express");
const {addTask,updateTaskById,completeTaskById,deleteTaskById,getAllTasks,getCompletedTasks}=require("../controllers/task");
const {authentication}=require("../middlewares/authentication");
const {authorization}=require("../middlewares/authorization");


const taskRouter=express.Router();

//endpoint for POST request ==> http://localhost:5000/task/==> addTask
taskRouter.post("/",authentication,addTask);

//endpoint for PUT request ==> http://localhost:5000/task/:id==> updateTaskById
taskRouter.put("/:id",authentication,updateTaskById);

//endpoint for PUT request ==> http://localhost:5000/task/completed/:id==> completeTaskById
taskRouter.put("/completed/:id",authentication,completeTaskById);

//endpoint for DELETE request ==> http://localhost:5000/task/:id==> deleteTaskById
taskRouter.delete("/:id",authentication,authorization("DELETE TASK"),deleteTaskById);

//endpoint for GET request ==> http://localhost:5000/task ==> getAllTasks
taskRouter.get("/",authentication,getAllTasks);

//endpoint for GET request ==> http://localhost:5000/task/completed ==> getCompletedTasks
taskRouter.get("/completed",authentication,getCompletedTasks);


module.exports=taskRouter;