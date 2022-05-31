const connection=require("../models/db");


// a function that adds a task to the database
const addTask=(req,res)=>{
//get the taskName and userId from the body:
const {taskName}=req.body;
const userId=req.token.userId;
const query=`INSERT INTO tasks(taskName,user_id) VALUES(?,?)`;
const data=[taskName,userId];
connection.query(query,data,(error,result)=>{
    if(error){
        return res.status(500).json({
            success:false,
            message:error.message,
        })
    };
    if(result.affectedRows){
       res.status(201).json({
        success:true,
        message:`task ${taskName} has been added successfuly`
    })
   }else{
       res.status(400).json({
        success:false,
        message:`an error occured while adding task ${taskName}`
    })
}
})
};

// a function that updates a taskName by its id sent by params /:id
const updateTaskById=(req,res)=>{
    const taskId=req.params.id;
    const {taskName}=req.body;
    const userId=req.token.userId;
    const query=`UPDATE tasks SET taskName=? WHERE id=? AND user_id=?`;
    const data=[taskName,taskId,userId];
    connection.query(query,data,(error,result)=>{
        if(error){
            return res.status(500).json({
                success:false,
                message:error.message,
            })
        };
        //if result.affectedRows !=0 then task has been updated
    if(result.affectedRows){
        res.status(200).json({
            success:true,
            message:`taskId ${taskId} has been updated successfuly`
        })
    }else{
        res.status(400).json({
            success:false,
            message:`an error occured while updating taskId ${taskId}`
        })
    }
    })
};


// a function that updates isCompleted to 1 for a task by its id sent by params /:id
const completeTaskById=(req,res)=>{
    const taskId=req.params.id;
    const userId=req.token.userId;
    const query=`UPDATE tasks SET isCompleted=1 WHERE id=? AND user_id=?`;
    const data=[taskId,userId];
    connection.query(query,data,(error,result)=>{
        if(error){
            return res.status(500).json({
                success:false,
                message:error.message,
            })
        };
        //if result.affectedRows !=0 then task has been updated
    if(result.affectedRows){
        res.status(200).json({
            success:true,
            message:`taskId ${taskId} has been updated successfuly`
        })
    }else{
        res.status(400).json({
            success:false,
            message:`an error occured while updating taskId ${taskId}`
        })
    }
    })

};

// a function that set isDeleted of a task to 1 by its id sent by params /:id
const deleteTaskById=(req,res)=>{
    const taskId=req.params.id;
    const userId=req.token.userId;
    //setting isDeleted to 1 (soft)
    const query=`UPDATE tasks SET isDeleted=1 WHERE id=? AND user_id=?`;
    const data=[taskId,userId];
    connection.query(query,data,(error,result)=>{
        if(error){
            return res.status(500).json({
                success:false,
                message:error.message,
            })
        };
        //if result.affectedRows !=0 then task has been updated
    if(result.affectedRows){
        res.status(200).json({
            success:true,
            message:`taskId ${taskId} has been deleted successfuly`
        })
    }else{
        res.status(400).json({
            success:false,
            message:`an error occured while deleting taskId ${taskId}`
        })
    }
    })
};


// a function that gets all the tasks saved in the database where isDeleted=0
const getAllTasks=(req,res)=>{
    const query=`SELECT * FROM tasks WHERE isDeleted=0 AND user_id=?`;
    const userId=req.token.userId;
    const data=[userId];
    connection.query(query,data,(error,result)=>{
        if(error){
            return res.status(500).json({
                success:false,
                message:error.message,
            })
        };
        //if result.length !=0 then there are tasks to be shown
    if(result.length){
        res.status(200).json({
            success:true,
            message:"All tasks",
            result:result
        })
    }else{//there's no taske to be shown (or the tasks are soft deletd)
        res.status(404).json({
            success:false,
            message:"No tasks found",
        })
    }
    })
};


// a function that gets all the tasks saved in the database where isDeleted=0 && isCompleted=1
const getCompletedTasks=(req,res)=>{
    const query=`SELECT * FROM tasks WHERE isDeleted=0 AND isCompleted=1 AND user_id=?`;
    const userId=req.token.userId;
    const data=[userId];
    connection.query(query,error,(error,result)=>{
        if(error){
            return res.status(500).json({
                success:false,
                message:error.message,
            })
        };
        //if result.length !=0 then there are tasks to be shown
    if(result.length){
        res.status(200).json({
            success:true,
            message:"All completed tasks",
            result:result
        })
    }else{//there's no taske to be shown (or the tasks are soft deletd)
        res.status(404).json({
            success:false,
            message:"No completed tasks found",
        })
    }
    })

};

module.exports={
    addTask,
    updateTaskById,
    completeTaskById,
    deleteTaskById,
    getAllTasks,
    getCompletedTasks,
}