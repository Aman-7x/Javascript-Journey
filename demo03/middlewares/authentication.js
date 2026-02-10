import jwt from  "jsonwebtoken";


export const auth = (req,res,next)=>{

    const token = req.headers.authorization.split(" ")[1] || req.headers.authorization.split(" ")[1] ; 

    
    if(!token)
        return res.status(401).json({"Error":"Token is missing"});

    jwt.verify(token,process.env.JWT_SECRET_KEY,(err,decoded)=>{
        if(err)
        return res.status(401).json({"Error":"Session Expired!"});

        req.user = decoded.user;
        next();
    });

}