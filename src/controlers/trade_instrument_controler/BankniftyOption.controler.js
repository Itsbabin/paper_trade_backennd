import BANKNIFTY_OPTION from "../../models/BANKNIFTY_OPTION.model.js";
import ApiResponse from "../../utils/ApiResponse.js";



async function BankniftyOption (req , res) {
     try {
        await BANKNIFTY_OPTION.findById(process.env.BANKNIFTY_OPTION_ID)
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


export default BankniftyOption ;