import User from "../../models/User.model.js";
import ApiResponse from "../../utils/ApiResponse.js";


async function UpdateWatchlist (req , res) {
        let { token , symbol , name , exch_seg} = req.body ;

        await User.findOneAndUpdate({_id : req.user._id} ,
                {
                 watch_list : [...req.user.watch_list , {
                        name ,
                        symbol,
                        token,
                        exch_seg   
                 }] 
            },  
            { new: true })
        .then((response) => {

                res.status(200).send(new ApiResponse(true , "watchlist updated successfully" , {
                        response
                }))
        })
        .catch((err) => {
                res.status(400).send(new ApiResponse(false , "error in updating watchlist" , {
                        err
                }))
        })
}

export default UpdateWatchlist;