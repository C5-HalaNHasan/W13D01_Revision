//to create the server
require("dotenv").config();
const { application, json } = require("express");
const express=require("express");
const app=express();
const db=require("./models/db");

app.use(express.json());
const PORT=process.env.PORT;

//require routers


//routers endpoint


app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})