//create the taskRouter and its endpoints
const express=require("express");
const {addTask,updateTaskById,completeTaskById,deleteTaskById,getAllTasks,getCompletedTasks}=require("../controllers/task");

const taskRouter=express.Router();

//endpoint for POST request ==> http://localhost:5000/task/==> addTask
taskRouter.post("/",addTask);

//endpoint for PUT request ==> http://localhost:5000/task/:id==> updateTaskById
taskRouter.post("/:id",updateTaskById);

//endpoint for POST request ==> http://localhost:5000/task/completed/:id==> completeTaskById
taskRouter.post("/completed/:id",completeTaskById);

//endpoint for DELETE request ==> http://localhost:5000/task/:id==> deleteTaskById
taskRouter.post("/:id",deleteTaskById);

//endpoint for GET request ==> http://localhost:5000/task ==> getAllTasks
taskRouter.post("/",getAllTasks);

//endpoint for GET request ==> http://localhost:5000/task/completed ==> getCompletedTasks
taskRouter.post("/completed",getCompletedTasks);


module.exports=taskRouter;