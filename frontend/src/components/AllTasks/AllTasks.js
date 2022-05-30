import axios from "axios";
import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import NavBar from "../NavBar/NavBar";

const AllTasks=()=>{
    //to inform the user about the states of the actions:
    const [message,setMessage]=useState("");

    //get token from redux store to be sent with axios requests/get tasks array to be filled by the backend and stored in the redux store:
    const {token,tasks}=useSelector((state)=>{
        return {
            token:state.auth.token,
            tasks:state.tasks.tasks
        }
    });

    //to set all the tasks in the redux store:
    const dispatch=useDispatch();


    //get request to the backend to get all the tasks registered for the currently loggedin user:
    const getAllTasks=()=>{
        const getAllTasksUrl="http://localhost:5000/task/";
        axios.get(getAllTasksUrl,{headers:{authorization:token}}).then((result)=>{

        }).catch((error)=>{

        })
    }

    return(
        <>
        <NavBar/>

        </>
    )

};

export default AllTasks;