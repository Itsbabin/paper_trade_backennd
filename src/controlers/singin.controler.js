import ApiResponse from "../utils/ApiResponse.js";

function signinUser(req,res) {
    res.send(new ApiResponse(true , "user signed in successfully" , {
        name : "user name"
    }))
}

export default signinUser;