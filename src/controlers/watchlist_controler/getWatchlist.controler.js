import ApiResponse from "../../utils/ApiResponse.js"



export default async function GetOrderbook(req , res) {
    res.status(200).send(new ApiResponse(true , "oderbook fetched" , {
        oder_book : req.user.watch_list 
    })) 
}
