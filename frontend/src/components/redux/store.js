import {configureStore} from "@reduxjs/toolkit";
import authReducer from "./reducers/auth/index";
import tasksReducer from "./reducers/tasks/index"

export default configureStore({
    reducer:{
        auth:authReducer,
        tasks:tasksReducer,
    }
});