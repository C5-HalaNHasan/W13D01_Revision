import axios from "axios";
import {useEffect, useState} from "react";
import NavBar from "../NavBar/NavBar";

//to implement redux:
import {useSelector,useDispatch} from "react-redux";
import {setTasks,addTasks,updateTaskById,deleteTaskById} from "../redux/reducers/tasks"

const  AllTasks=()=>{
    //to update taskName:
    const [taskName,setTaskName]=useState("")
    //to add task:
    const [newTask,setNewTask]=useState("")
    const dispatch=useDispatch();
    //to rendere different navBar items if the user is loggedIn:
    const {token,tasks}=useSelector((state)=>{
        return{
            token:state.auth.token,
            tasks:state.tasks.tasks
        }
        });

    //get request to the backend to get all the tasks registered for the currently loggedin user:
    const getAllTasks=()=>{
        const getAllTasksUrl="http://localhost:5000/task/";
        axios.get(getAllTasksUrl,{headers:{authorization:token}}).then((result)=>{
            // console.log(result.data.result)
            dispatch(setTasks(result.data.result));

        }).catch((error)=>{
            console.log(error.response.data.message);
        })
    }
    
    useEffect(()=>{
        getAllTasks();
    },[]);

    //to delete task from dataBase by its id:
    const deleteTaskFromDB=(id)=>{
        const deleteTasksUrl=`http://localhost:5000/task/${id}`;
        axios.delete(deleteTasksUrl,{headers:{authorization:token}}).then((result)=>{
            // console.log(result.data.result)
            dispatch(deleteTaskById(id));
            getAllTasks(); //to rerender
        }).catch((error)=>{
            console.log(error.response.data.message);
        })
    };

    //to set task to completed (isCompleted=1) by its id:
    const setTaskCompleted=(id)=>{
        const completeTasksUrl=`http://localhost:5000/task/completed/${id}`;
        axios.put(completeTasksUrl,{},{headers:{authorization:token}}).then((result)=>{
            // console.log(result.data.result)
            dispatch(updateTaskById(id));
            getAllTasks(); //to rerender
        }).catch((error)=>{
            console.log(error.response.data.message);
        })
    };

    //to update taskName by its id:
    const updateTaskInDb=(id,taskName)=>{
        const updateTaskNameUrl=`http://localhost:5000/task/${id}`;
        axios.put(updateTaskNameUrl,{id,taskName},{headers:{authorization:token}}).then((result)=>{
            // console.log(result.data.result)
            dispatch(updateTaskById(taskName));
            getAllTasks(); //to rerender
        }).catch((error)=>{
            console.log(error.response.data.message);
        })
    };

    //to add new task to satBase:
    const addNewTaskToDb=(newTask)=>{
        const addNewTaskUrl=`http://localhost:5000/task/`;
        axios.post(addNewTaskUrl,{taskName:newTask},{headers:{authorization:token}}).then((result)=>{
            // console.log(result.data.result)
            dispatch(addTasks(newTask));
            getAllTasks(); //to rerender
        }).catch((error)=>{
            console.log(error.response.data.message);
        })
    };


return(
    <>
    {/* <NavBar/> */}
    <label for="newTask">Add new task</label>
    <input id="newTask" placeHolde="add new task" onChange={(e)=>setNewTask(e.target.value)}/>
    <button onClick={()=>addNewTaskToDb(newTask)}>add</button>
    <br/><br/>

  <div className="taskCard">
  {tasks.map((task,index)=>{
      return(<>
          <p>{task.taskName}</p>
          <input placeHolder="new name" onChange={(e)=>setTaskName(e.target.value)}/>
          <p>{task.isCompleted}</p>
          <button onClick={()=>deleteTaskFromDB(task.id)}>delete</button>
          {!task.isCompleted&&(<>
          <button onClick={()=>updateTaskInDb(task.id,taskName)}>update</button>
          <button onClick={()=>setTaskCompleted(task.id)}>complete</button>
          </>)}
      </>)
  })}

  </div>
  </>

)
};

export default AllTasks;