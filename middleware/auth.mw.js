const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs")

const authToken = (req,res,next)=>{
    try{
        const token = req.header("Authorization");
        if(!token)
            return res.status(401).json({msg:"Access failed"});
         jwt.verify(token,process.env.SECRET_KEY,(err,user)=>{
            if(err)return res.status(401).json({msg:"token failed"});
    
            req.user = user;
            next();
        })

    }catch(err){
        console.log(err)
    };

};

//authorizATION for admin 
const isAdmin = (req, res, next) => {
    if (req.user.role !== "admin") {
      return res.status(403).send({msg: "Access denied." });
    }
    next();
  };

module.exports = isAdmin;  
module.exports = authToken;