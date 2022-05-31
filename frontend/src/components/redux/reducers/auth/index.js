import { createSlice } from "@reduxjs/toolkit";

const authSlice=createSlice({
    name:"auth",
    initialState:{
        token: localStorage.getItem("token") || "",
    },
    reducers:{
        setLogin:(state,action)=>{
            // action:{payload:token from the login backend response}
            state.token=action.payload;
            localStorage.setItem("token",`Bearer ${action.payload}`); //!
        },
        setLogout:(state,action)=>{
            state.token="";
            localStorage.clear();
        },

    }
});

export const {setLogin,setLogout}=authSlice.actions;
export default authSlice.reducer;