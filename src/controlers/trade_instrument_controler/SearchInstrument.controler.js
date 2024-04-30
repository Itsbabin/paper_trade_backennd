// import All_Stock from "../../models/All_Stocks.model.js";
import ApiResponse from "../../utils/ApiResponse.js";



export default async function SearchInstrument(req, res) {
    let stocks
    await All_Stock.find( { "name": { "$regex": req.body.query , "$options": "i" } })
        .then((response) => {
            // stocks = response[0].All_Stock
            // let searchString = 
            // stocks = stocks.filter(item => {
            //     if (item.name.toLowerCase().includes(searchString.toLowerCase())) {
            //         return item;
            //     }
            // });

            res.status(200).send(new ApiResponse(true, "searched items are fetched", {
               response
            }))
        })
        .catch((err) => {
            res.status(400).send(new ApiResponse(false, "error occured", {
                err
            }))
        })
}
