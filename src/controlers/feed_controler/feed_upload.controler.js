import ApiResponse from "../../utils/ApiResponse.js";

const uploadFeed = (req , res) => {
    res.send( new ApiResponse(true , "feed uploaded successfully" , {
        data : "data"
    }))
}


export default uploadFeed;