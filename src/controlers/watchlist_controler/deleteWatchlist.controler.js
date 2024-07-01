import User from "../../models/User.model.js";
import ApiResponse from "../../utils/ApiResponse.js";

export default function deleteWatchlist(req , res) {
    let userId = req.user._id
    let {itemId} = req.body
    User.updateOne(
        { _id :  userId }, 
        { $pull: { watch_list: { _id : itemId } } },
    )
    .then((response) => {
        res.status(200).send(new ApiResponse(true , "successfully deleted" , {
            response
        }))
    })  
    .catch(() => {
        res.status(500).send(new ApiResponse(true , "some error occured in deletion" , null))
    })
}
