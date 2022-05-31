import axios from "axios";
import {useEffect} from "react";
import NavBar from "../NavBar/NavBar";

//to implement redux:
import {useSelector,useDispatch} from "react-redux";
import {setTasks} from "../redux/reducers/tasks";

const  CompletedTasks=()=>{

     const dispatch=useDispatch();
     //to rendere different navBar items if the user is loggedIn:
     const {token,tasks}=useSelector((state)=>{
         return{
             token:state.auth.token,
             tasks:state.tasks.tasks
         }
         });
 
     //get request to the backend to get all the tasks registered for the currently loggedin user:
     const getCompletedTasks=()=>{
         const getCompletedTasksUrl="http://localhost:5000/task/completed";
         axios.get( getCompletedTasksUrl,{headers:{authorization:token}}).then((result)=>{
             // console.log(result.data.result)
             dispatch(setTasks(result.data.result));
 
         }).catch((error)=>{
             console.log(error.response.data.message);
         })
     }
     
     useEffect(()=>{
      getCompletedTasks();
     },[]);
 
 
 return(
     <>
     <NavBar/>
 
   <div className="tasksContainer">
   {tasks.length&&tasks.map((task,index)=>{
       return(<div className="taskCard">
           <p>{task.taskName}</p>
       </div>)
   })}
 
   </div>
   </>
 
 )


};

export default CompletedTasks;