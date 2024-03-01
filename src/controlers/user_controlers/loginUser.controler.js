import User from "../../models/User.model.js";
import ApiResponse from "../../utils/ApiResponse.js";

async function loginUser (req,res) {
      let { userid , password} = req.body ;
    try {
        let user = await User.findOne({userid});
        console.log(user);
        if(!user){
            user =  await User.findOne({email : userid})
            if (!user) {
                throw new ApiResponse(false , "email or user id dose not exist" , {
                    response : null
                })
            }
        }
        let truePassword = await user.isPasswordCorrect(password);
        if (!truePassword) {
            throw new ApiResponse(false , "wrong password" , {
                response : null
            })
        }
        else{
        let token = user.genarateToken();
        res.status(200).send(new ApiResponse(true , "user longed in successfully" , {
            token
        }))
    }
    } catch (error) {
        res.status(400).json(error)
    }
    
}

export default loginUser;