import NIFTY_OPTION from "../../models/NIFTY_OPTION.model.js"
import ApiResponse from "../../utils/ApiResponse.js"


    async function NiftyOption (req , res) {

        try {
           await NIFTY_OPTION.findById(process.env.NIFTY_OPTION_ID)
           .then((response) => {
               res.status(200).send(new ApiResponse(true , "successfully fetched" , {
                response
               }))
           })
           .catch(() => {
            res.status(400).send(new ApiResponse(true , "error occoured in DB conection" , null))
           })
        } catch (error) {
            res.status(400).send(new ApiResponse(true , "some error occoured" , null))
        }

    }

    export default NiftyOption ;