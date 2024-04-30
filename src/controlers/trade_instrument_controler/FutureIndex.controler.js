import FUTURE_INDEX from "../../models/FUTURE_INDEX.model.js";
import ApiResponse from "../../utils/ApiResponse.js";



async function FutureIndex (req , res) {
     try {
        let {page} = req.body
        page = page*50 ;
        await FUTURE_INDEX.find().sort({$natural:-1}).skip(page).limit(page+50)
        .then((response) => {
            res.status(200).send(new ApiResponse(true , "successfully fetched" , {
                FUTURE_INDEX : response
               }))
        })
        .catch(() => {
            res.status(400).send(new ApiResponse(true , "error occoured in DB conection" , null))
        })
    } catch (error) {
         res.status(400).send(new ApiResponse(true , "error occoured in DB conection" , null))
     }
}


export default FutureIndex ;