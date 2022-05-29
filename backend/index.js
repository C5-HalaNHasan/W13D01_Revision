//to create the server
require("dotenv").config();
const { application, json } = require("express");
const express=require("express");
const app=express();
const db=require("./models/db");

app.use(express.json());
const PORT=process.env.PORT;

//require routers
const roleRouter=require("../backend/routes/role");
const userRouter=require("./routes/user");
const taskRouter=require("./routes/task");


//routers endpoint
app.use("/role",roleRouter);
app.use("/user",userRouter);
app.use("/task",taskRouter);


app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})