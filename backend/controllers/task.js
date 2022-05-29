const connection=require("../models/db");


// a function that adds a task to the database
const addTask=(req,res)=>{

};

// a function that updates a taskName by its id sent by params /:id
const updateTaskById=(req,res)=>{

};


// a function that updates isCompleted to 1 for a task by its id sent by params /:id
const completeTaskById=(req,res)=>{

};

// a function that set isDeleted of a task to 1 by its id sent by params /:id
const deleteTaskById=(req,res)=>{

};


// a function that gets all the tasks saved in the database where isDeleted=0
const getAllTasks=(req,res)=>{

};


// a function that gets all the tasks saved in the database where isDeleted=0 && isCompleted=1
const getCompletedTasks=(req,res)=>{

};


module.exports={
    addTask,
    updateTaskById,
    completeTaskById,
    deleteTaskById,
    getAllTasks,
    getCompletedTasks,
}