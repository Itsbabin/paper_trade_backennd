import FINNIFTY_OPTION from "../../models/FINNIFTY_OPTION.model.js";
import ApiResponse from "../../utils/ApiResponse.js";



async function FinniftyOption (req , res) {
     try {
        await FINNIFTY_OPTION.findById(process.env.FINNIFTY_OPTION_ID)
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


export default FinniftyOption ;