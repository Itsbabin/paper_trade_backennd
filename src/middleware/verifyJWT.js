import jwt from "jsonwebtoken";
import User from "../models/User.model.js";
import ApiResponse from "../utils/ApiResponse.js";

async function verifyJwt(req, res, next) {
    
    try {
        
    let token = req.header("token");

    if (!token) {
      throw new ApiResponse(false, "we cant get token", null);
    }

    let isVerified =  jwt.verify(token,process.env.SECRET)
   
    let user =  await User.findOne({_id : isVerified?._id})

    if(!user){
        throw new ApiResponse(false, "token is not valid", null);
    }

    req.user = user;

    next();
       
    } catch (error) {
        res.status(400).json(new ApiResponse(false, "some error ocurred", {error})); 
    }

}

export default verifyJwt;
