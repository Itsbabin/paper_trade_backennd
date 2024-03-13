import FUTURE_INDEX from "../../models/FUTURE_INDEX.model.js";
import ApiResponse from "../../utils/ApiResponse.js";



async function FutureIndex (req , res) {
     try {
        await FUTURE_INDEX.findById(process.env.FUTURE_INDEX_ID)
        .then((response) => {
            res.status(200).send(new ApiResponse(true , "successfully fetched" , {
                response
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