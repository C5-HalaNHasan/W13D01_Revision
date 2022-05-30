import "./register.css"
import axios from "axios";
import {useState} from "react";

const Register=()=>{
    const [email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const [message,setMessage]=useState("");

    const createNewUser=()=>{
        if(email&&password){ //to ensure that the database has user email and password
            axios.post("http://localhost:5000/user/register",{email,password,role_id:"1"}).then((result)=>{
                if(result.data.success){
                    setMessage(result.data.message)
                }else{
                    setMessage(result.data.message)
                }
            }).catch((error)=>{
                // console.log(error.response.data.message)
                setMessage(error.response.data.message)
            })
        }else{
            setMessage("please fill all the fields")
        }
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