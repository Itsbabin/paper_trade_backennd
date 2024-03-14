import Feed from '../../models/Feed.model.js'
import ApiResponse from '../../utils/ApiResponse.js';


async function FetchFeed(req , res) {
    let {page} = req.body
    if(page === undefined){
        res.status(400).send(new ApiResponse(false , "page no is not valid" , null))
    }
    else{
    await Feed.find().sort({$natural:-1}).skip(10*page).limit(10)
    .then((response) => {
        res.status(200).send(new ApiResponse(true , "feed fetched" , {
            response
        }))
    })
    .catch((err) => {
        res.status(400).send(new ApiResponse(false , "feed fetched" , null))
    })
   }
}

export default FetchFeed;