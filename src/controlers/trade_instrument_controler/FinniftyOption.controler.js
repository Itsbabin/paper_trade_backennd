import FINNIFTY_OPTION from "../../models/FINNIFTY_OPTION.model.js";
import ApiResponse from "../../utils/ApiResponse.js";



async function FinniftyOption (req , res) {
     try {
        let {page} = req.body
        page = page*50 ;
        await FINNIFTY_OPTION.find().sort({$natural:-1}).skip(page).limit(page+50)
        .then((response) => {
            res.status(200).send(new ApiResponse(true , "successfully fetched" , {
                FINNIFTY_OPTION : response
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