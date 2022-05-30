import axios from "axios";
import {useEffect} from "react";
import NavBar from "../NavBar/NavBar";

//to implement redux:
import {useSelector,useDispatch} from "react-redux";
import {setTasks} from "../redux/reducers/tasks"

const  AllTasks=()=>{
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
    },[])

return(
    <>
    <NavBar/>

    
  <div className="taskCard">
  {tasks.map((task,index)=>{
      return(<>
          <p>{task.taskName}</p>
          <p>{task.isCompleted}</p>
          <button>delete</button>
          <button>update</button>
          <button>complete</button>
      </>)
  })}

  </div>
  </>

)
};

export default AllTasks;