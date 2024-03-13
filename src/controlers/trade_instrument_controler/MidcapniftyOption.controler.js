import MIDCPNIFTY_OPTION from "../../models/MIDCPNIFTY_OPTION.model.js";
import ApiResponse from "../../utils/ApiResponse.js";



async function MidcapniftyOption (req , res) {
     try {
        await MIDCPNIFTY_OPTION.findById(process.env.MIDCPNIFTY_OPTION_ID)
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


export default MidcapniftyOption