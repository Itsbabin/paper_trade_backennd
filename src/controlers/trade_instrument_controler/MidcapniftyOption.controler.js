import MIDCPNIFTY_OPTION from "../../models/MIDCPNIFTY_OPTION.model.js";
import ApiResponse from "../../utils/ApiResponse.js";



async function MidcapniftyOption (req , res) {
     try {
        let {page} = req.body
        page = page*50 ;
        await MIDCPNIFTY_OPTION.find().sort({$natural:-1}).skip(page).limit(page+50)
        .then((response) => {
            res.status(200).send(new ApiResponse(true , "successfully fetched" , {
                MIDCPNIFTY_OPTION : response.find().sort({$natural:-1}).limit(page+50)
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