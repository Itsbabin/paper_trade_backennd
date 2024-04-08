import FUTURE_STOCK from "../../models/FUTURE_STOCK.model.js";
import ApiResponse from "../../utils/ApiResponse.js";



async function FutureStock (req , res) {
     try {
        let {page} = req.body
        page = page*50 ;
        await FUTURE_STOCK.findById(process.env.FUTURE_STOCK_ID)
        .then((response) => {
            res.status(200).send(new ApiResponse(true , "successfully fetched" , {
                FUTURE_STOCK : response.FUTURE_INDEX.slice(page ,(page+50))
               }))
        })
        .catch(() => {
            res.status(400).send(new ApiResponse(true , "error occoured in DB conection" , null))
        })
    } catch (error) {
         res.status(400).send(new ApiResponse(true , "error occoured in DB conection" , null))
     }
}


export default FutureStock ;