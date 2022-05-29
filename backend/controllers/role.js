const connection=require("../models/db");


//a function that creates a new role in the data base
const createNewRole=(req,res)=>{
    const {role}=req.body;
    const query=`INSERT INTO roles(role) VALUES (?)`;
    const data=[role];
    connection.query(query,data,(error,result)=>{
        if(error){
            return res.status(500).json({
                success:false,
                message:error.message,
            })
        };

        res.status(201).json({
            success:true,
            message:`role ${role} created successfully`,
            result:result,
        })
    });

};


//a function that creates a new permission in the data base
const createNewPermission=(req,res)=>{
    const {permission}=req.body;
    const query=`INSERT INTO permissions(permission) VALUES (?)`;
    const data=[permission];
    connection.query(query,data,(error,result)=>{
        if(error){
            return res.status(500).json({
                success:false,
                message:error.message,
            })
        };

        res.status(201).json({
            success:true,
            message:`permission ${permission} created successfully`,
            result:result,
        })
    });

};


//a function that binds role_id & permission_id sent by body
const createRolePermission=(req,res)=>{
    const {role_id,permission_id}=req.body;
    const query=`INSERT INTO role_permission(role_id,permission_id) VALUES (?,?)`;
    const data=[role_id,permission_id];
    connection.query(query,data,(error,result)=>{
        if(error){
            return res.status(500).json({
                success:false,
                message:error.message,
            })
        };

        res.status(201).json({
            success:true,
            message:`role_id ${role_id} with permission_id ${permission_id}  combined successfully`,
            result:result,
        })
    });

};


module.exports={
    createNewRole,
    createNewPermission,
    createRolePermission
}