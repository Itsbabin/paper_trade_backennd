import FUTURE_STOCK from "../../models/FUTURE_STOCK.model.js";
import ApiResponse from "../../utils/ApiResponse.js";



async function FutureStock (req , res) {
     try {
        let {page} = req.body
        page = page*50 ;
        await FUTURE_STOCK.find().sort({$natural:-1}).skip(page).limit(page+50)
        .then((response) => {
            res.status(200).send(new ApiResponse(true , "successfully fetched" , {
                FUTURE_STOCK : response
                           }))
        })
        .catch((err) => {
            res.status(400).send(new ApiResponse(true , "error occoured in DB conection" , null))
            console.log(err);
        })
    } catch (error) {
        console.log(error);
         res.status(400).send(new ApiResponse(true , "error occoured in DB conection" , null))
     }
}


export default FutureStock ;