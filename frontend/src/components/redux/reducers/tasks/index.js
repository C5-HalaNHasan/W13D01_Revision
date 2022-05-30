import { createSlice } from "@reduxjs/toolkit"; 

const tasksSlice=createSlice({
    name:"tasks",
    initialState:{
        tasks:[] //array of tasks objects
    },
    reducers:{
        setTasks:(state,action)=>{
        // action:{payload:[array of tasks from backend]}
        state.tasks=action.payload;
        },
        addTasks:(state,action)=>{
        // action:{payload:{object contains task info}}
        state.tasks.push(action.payload)
        },
        updateTaskById:(state,action)=>{
        // action:{payload:{id,taskName,isCompleted}}
        state.tasks=state.tasks.map((task)=>{
            if(task.id == action.payload.id){
                return {...task,taskName:action.payload.taskName||task.taskName,isCompleted:action.payload.isCompleted||task.isCompleted}
            }else{
                return task;
            }
        })

        },
        deleteTaskById:(state,action)=>{
        // action:{payload:id of the deleted task}
        state.tasks.splice(action.payload,1)
        },
    }
})

export const {setTasks,addTasks,updateTaskById,deleteTaskById}=tasksSlice.actions;
export default tasksSlice.reducer;