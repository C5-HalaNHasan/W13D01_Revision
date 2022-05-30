import axios from "axios";
import {useState} from "react";

//to implement redux:
import {useSelector,useDispatch} from "react-redux";
import {setLogin} from "../redux/reducers/auth"

const  Login=()=>{
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [message,setMessage]=useState("");
    
    //to save the token in the store after a successful login:
    const dispatch=useDispatch();
    const {token}=useSelector((state)=>{
        return{
            token:state.auth.token
        }
    })

    const loginUser=()=>{
        axios.post("http://localhost:5000/user/login",{email,password}).then((result)=>{
            // console.log(result)
            if(result.data.token){
                setMessage("successful logIn")
                dispatch(setLogin(result.data.token)) //to be saved in the store
            }else{
                setMessage("unsuccessful logIn")
            }
        }).catch((error)=>{
            // console.log(error.response.data.message)
            setMessage(error.response.data.message)
        })
    };


return(
    <div className="mainBox">
        <h3>login:</h3>
        <input type="email" placeHolder="email..." onChange={(e)=>setEmail(e.target.value)}/>
        <input type="password" placeHolder="password..." onChange={(e)=>setPassword(e.target.value)} />
        <button onClick={()=>loginUser()}>login</button>
        <h3>{message}</h3>
    </div>
)
};

export default Login;