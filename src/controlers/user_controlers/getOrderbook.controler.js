import ApiResponse from "../../utils/ApiResponse.js";



export default async function GetWatchlist(req , res) {
    res.status(200).send(new ApiResponse(true , "oderbook fetched" , {
        oder_book : req.user.oder_book
    }))
}
