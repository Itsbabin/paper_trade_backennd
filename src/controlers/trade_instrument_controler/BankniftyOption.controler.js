import BANKNIFTY_OPTION from "../../models/BANKNIFTY_OPTION.model.js";
import ApiResponse from "../../utils/ApiResponse.js";



async function BankniftyOption (req , res) {
     try {
        let {page} = req.body
     page = page*50 ;
        await BANKNIFTY_OPTION.find().sort({$natural:-1}).skip(page).limit(page+50)
        .then((response) => {
            res.status(200).send(new ApiResponse(true , "successfully fetched" , {
                BANKNIFTY_OPTION : response
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