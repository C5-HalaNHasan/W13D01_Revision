import axios from "axios";
import "./navBar.css";
import { useEffect } from "react";
import {Link} from "react-router-dom";
import { setLogout } from "../redux/reducers/auth";
import { useDispatch,useSelector } from "react-redux";




const NavBar=()=>{
    const dispatch=useDispatch();
    //to rendere different navBar items if the user is loggedIn:
    const {token}=useSelector((state)=>{
        return{
            token:state.auth.token,
        }
    })

    //logout function dispatch:
    const logOutUser=()=>{
        dispatch(setLogout());
    }

    
 

    return(
        <>
            
            <div className="navBar">
            <h3>toDo-App</h3>
            
            <ul>
            {token?(<>
            <li>
            <Link to="/completed">CompletedTasks</Link>
            </li>
            <li>
            <Link to="/alltasks">AllTasks</Link>
            </li>
            <li onClick={()=>logOutUser()}>
            <Link to="">logout</Link>
            </li>
            </>):(<>
            <li>
            <Link to="/register">register</Link>
            </li>
            <li>
            <Link to="/login">login</Link>
            </li>
            </>)}

            

            </ul>
          


            </div>
        </>
    )

};

export default NavBar;