import Feed from "../../models/Feed.model.js";
import ApiResponse from "../../utils/ApiResponse.js";

async function updatelike (req , res) {
    const feed_id = req.body.feed_id ;

    await Feed.findById(feed_id)
    .then( async (result) => {
      let likes = result.likes
        likes++;
        await Feed.findOneAndUpdate({_id : feed_id} ,
            { $set: { likes : likes } }, 
            { new: true })
        .then((response) => {
            res.status(200).send(new ApiResponse(true , "liked 😊!!" , {
                response
            }))
        })
        .catch((err) => {
            res.status(400).send(new ApiResponse(false , "some thing went wrong" , {
                err
            }))
        })
    })
    .catch((error) => {
        res.status(400).send(new ApiResponse(false , "some thing went wrong in feed find" , {
            error
        }))
    })
}


export default updatelike ;
