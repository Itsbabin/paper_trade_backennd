import Feed from "../../models/Feed.model.js";
import ApiResponse from "../../utils/ApiResponse.js";

async function comment_new (req , res) {
    let { comment , feed_id } = req.body ;

    let newComment = {
        com_author : req.user._id,
        com_text : comment
    }

    await Feed.findById(feed_id)
    .then( async (result) => {
        await Feed.findOneAndUpdate({_id : feed_id} ,
            { $set: { comments : [...result.comments , newComment ] } }, 
            { new: true })
        .then((response) => {
            res.status(200).send(new ApiResponse(true , "comment success fuully !!" ,null))
        })
        .catch(() => {
            res.status(400).send(new ApiResponse(false , "an error occured" , null))
        })
    })
    .catch(() => {
        res.status(400).send(new ApiResponse(false , "cant fiind feed" , null))
    })

}

export default comment_new ;