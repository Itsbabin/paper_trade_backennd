import ApiResponse from "../utils/ApiResponse.js";

function loginUser (req,res) {
    res.send(new ApiResponse(true , "user longed in successfully" , {
        name : "name of user"
    }))
}

export default loginUser;