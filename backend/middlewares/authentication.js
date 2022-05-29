const jwt=require("jsonwebtoken");

const authentication=(req,res)=>{
    try {
        //first the token is going to be checked if it's entered or not;if not then the user can't access the api
        if (!req.headers.authorization)
          return res.status(403).json({ 
              message: "forbidden" 
            });

        //if the user has entered the token: the token is going to be checked if it's valid or not
        const token = req.headers.authorization.split(" ").pop();
        jwt.verify(token, process.env.SECRET, (err, result) => {
          console.log("from authentication func",result)//!
        //if the is invalid;then the user will not be able to access the api:
          if (err) {
            res.status(403).json({
              success: false,
              message: "The token is invalid or expired",
            });
          } else {
            req.token = result;
            next();
          }
        });
      } catch (error) {
        res.status(403).json({ 
            message: "forbidden" 
        });
      }
    };

module.exports={authentication};