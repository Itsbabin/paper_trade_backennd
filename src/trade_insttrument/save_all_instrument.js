import axios from "axios";
import NIFTY_OPTION from "../models/NIFTY_OPTION.model.js";
import BANKNIFTY_OPTION from "../models/BANKNIFTY_OPTION.model.js";
import MIDCPNIFTY_OPTION from "../models/MIDCPNIFTY_OPTION.model.js";
import FUTURE_INDEX from "../models/FUTURE_INDEX.model.js";
import FUTURE_STOCK from "../models/FUTURE_STOCK.model.js";
import FINNIFTY_OPTION from "../models/FINNIFTY_OPTION.model.js";
import All_Stocks from "../models/All_Stocks.model.js";

async function SaveAll_Instrument () {

    let future_index = [] ;
    let future_stock = [] ;
    let nifty_option = [] ;
    let midcap_option = [] ;
    let banknifty_option = [] ;
    let finnifty_option = [] ;
    let all_stock = [] ;

    await axios("https://margincalculator.angelbroking.com/OpenAPI_File/files/OpenAPIScripMaster.json")
    .then(async (response) => {
        response = response.data;
    all_stock = response.filter((element) => {
        if (element.exch_seg === "NSE" && element.instrumenttype === "") {
        return element;
        }
    })
    future_stock = response.filter((element) => {
        if (element.exch_seg === "NFO" && element.instrumenttype === "FUTSTK") {
        return element;
        }
    })
    future_index = response.filter((element) => {
         if(element.exch_seg === "NFO" && element.instrumenttype === "FUTIDX"){
            return element;
        }
    })
    nifty_option = response.filter((element) => {
        if (element.exch_seg === "NFO" && element.instrumenttype === "OPTIDX" && element.name === "NIFTY"){
         return element;
        }
    })
    midcap_option = response.filter((element) => {
        if (element.exch_seg === "NFO" && element.instrumenttype === "OPTIDX" && element.name === "MIDCPNIFTY"){
            return element;
        }
    })
    banknifty_option = response.filter((element) => {
        if (element.exch_seg === "NFO" && element.instrumenttype === "OPTIDX" && element.name === "BANKNIFTY"){
            return element;
        }
    })
    finnifty_option = response.filter((element) => {
         if (element.exch_seg === "NFO" && element.instrumenttype === "OPTIDX" && element.name === "FINNIFTY"){
            return element;
        }
    })
})


try {
    await NIFTY_OPTION.deleteMany()
    await NIFTY_OPTION.insertMany(nifty_option)
    await BANKNIFTY_OPTION.deleteMany() 
    await BANKNIFTY_OPTION.insertMany(banknifty_option) 
    await FINNIFTY_OPTION.deleteMany() 
    await FINNIFTY_OPTION.insertMany(finnifty_option) 
    await MIDCPNIFTY_OPTION.deleteMany() 
    await MIDCPNIFTY_OPTION.insertMany(midcap_option) 
    await FUTURE_INDEX.deleteMany() 
    await FUTURE_INDEX.insertMany(future_index) 
    await FUTURE_STOCK.deleteMany() 
    await FUTURE_STOCK.insertMany(future_stock) 
    await All_Stocks.deleteMany() 
    await All_Stocks.insertMany(all_stock) 
    .then(() => {
        console.log("instrument update successfully!!");
    })

    
} catch (error) {
    console.log(error);
      console.log("problem in update instrument");
}

}

export default SaveAll_Instrument;