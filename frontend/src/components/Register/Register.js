import "./register.css"
import axios from "axios";
import {useState} from "react";

const Register=()=>{
    const [email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const [message,setMessage]=useState("");

    const createNewUser=()=>{
        axios.post("http://localhost:5000/user/register",{email,password,role_id:"1"}).then((result)=>{
            if(result.data.success){
                setMessage(result.data.message)
            }else{
                setMessage(result.data.message)
            }
        }).catch((error)=>{
            setMessage(error.message)
        })
    };


return(
    <div className="mainBox">
        <h3>register:</h3>
        <input type="email" placeHolder="email..." onChange={(e)=>setEmail(e.target.value)}/>
        <input type="password" placeHolder="password..." onChange={(e)=>setPassword(e.target.value)} />
        <button onClick={()=>createNewUser()}>register</button>
        <h3>{message}</h3>
    </div>
)
};

export default Register;