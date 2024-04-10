import All_Stock from "../../models/All_Stocks.model.js";
import ApiResponse from "../../utils/ApiResponse.js";


async function AllStock (req , res) {
    try { 
       let {page} = req.body
    page = page*50 ;
       await All_Stock.findById(process.env.All_STOCK_ID)
       .then((response) => {
           res.status(200).send(new ApiResponse(true , "successfully fetched" , {
            All_Stock : response.All_Stock.slice(page ,(page+50))
              }))
       }) 
       .catch(() => {
           res.status(400).send(new ApiResponse(true , "error occoured in DB conection" , null))
       })
   } catch (error) {
        res.status(400).send(new ApiResponse(true , "error occoured in DB conection" , null))
    }
}


export default AllStock 