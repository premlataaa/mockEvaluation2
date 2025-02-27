const jwt = require("jsonwebtoken");

const authToken = (req,res,next)=>{
    try{
        const token = req.header("Authorization")?.split(" ")[1];
        if(!token)
            return res.status(404).json({msg:"Access failed"});
         jwt.verify(token,process.env.SECRET_KEY,(err,user)=>{
            if(err)return res.status(401).json({msg:"token failed"});
    
            req.user = user;
            next();
        })

    }catch(err){
        console.log(err)
    };

}

module.exports = authToken;