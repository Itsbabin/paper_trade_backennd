import Feed from "../../models/Feed.model.js";
import ApiResponse from "../../utils/ApiResponse.js";


export default async function FetchpersonalFeed(req, res) {
    await Feed.find({author : req.user._id})
    .then((response) => {
        res
        .status(200)
        .send(
            new ApiResponse(true , "feed fetched" ,{
                feed : response
            })
        )
    })
    .catch((err) => {
        res
        .status(400)
        .send(
            new ApiResponse(false , "error in feching feed" ,{
                err 
            })
        )
    })
}
