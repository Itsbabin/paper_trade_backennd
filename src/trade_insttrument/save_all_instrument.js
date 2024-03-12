import axios from "axios";
import NIFTY_OPTION from "../models/NIFTY_OPTION.model.js";
import BANKNIFTY_OPTION from "../models/BANKNIFTY_OPTION.model.js";
import MIDCPNIFTY_OPTION from "../models/MIDCPNIFTY_OPTION.model.js";
import FUTURE_INDEX from "../models/FUTURE_INDEX.model.js";
import FUTURE_STOCK from "../models/FUTURE_STOCK.model.js";
import FINNIFTY_OPTION from "../models/FINNIFTY_OPTION.model.js";

async function SaveAll_Instrument () {

    let future_index = [] ;
    let future_stock = [] ;
    let nifty_option = [] ;
    let midcap_option = [] ;
    let banknifty_option = [] ;
    let finnifty_option = [] ;

    await axios("https://margincalculator.angelbroking.com/OpenAPI_File/files/OpenAPIScripMaster.json")
    .then(async (response) => {
        response = response.data;
    for (let index = 0; index < response.length; index++) {
        const element = response[index];
        if (element.exch_seg === "NFO" && element.instrumenttype === "FUTSTK") {
            future_stock = [...future_stock , element]
            // future_stock = []
        }
        else if (element.exch_seg === "NFO" && element.instrumenttype === "FUTIDX") {
            future_index = [...future_index,element];
            // future_index = [];
           }
        else  if (element.exch_seg === "NFO" && element.instrumenttype === "OPTIDX" && element.name === "NIFTY"){
            nifty_option = [...nifty_option,element];
            // nifty_option = [];
        }
        else if (element.exch_seg === "NFO" && element.instrumenttype === "OPTIDX" && element.name === "MIDCPNIFTY"){
            midcap_option = [...midcap_option,element];
            // midcap_option = [];
        }
        else if (element.exch_seg === "NFO" && element.instrumenttype === "OPTIDX" && element.name === "BANKNIFTY"){
            banknifty_option = [...banknifty_option,element];
            // banknifty_option = [];
        }
        else if (element.exch_seg === "NFO" && element.instrumenttype === "OPTIDX" && element.name === "FINNIFTY"){
            finnifty_option = [...finnifty_option,element];
            // finnifty_option = [];
        }

    }
})


try {
    await NIFTY_OPTION.findOneAndUpdate({_id : "65ef67c97423a952a4d04938"} ,
        {
        NIFTY_OPTION : nifty_option
    }, 
    { new: true })
    await BANKNIFTY_OPTION.findOneAndUpdate({_id : "65ef67d67423a952a4d04f17"} ,
        {
        BANKNIFTY_OPTION : banknifty_option
    }, 
    { new: true })
    await FINNIFTY_OPTION.findOneAndUpdate({_id : "65ef67e17423a952a4d054fa"} ,
        {
        FINNIFTY_OPTION : finnifty_option
    }, 
    { new: true })
    await MIDCPNIFTY_OPTION.findOneAndUpdate({_id : "65ef67e47423a952a4d05962"} ,
        {
        MIDCPNIFTY_OPTION : midcap_option
    }, 
    { new: true })
    await FUTURE_INDEX.findOneAndUpdate({_id : "65ef67e77423a952a4d05e6c"} ,
        {
        FUTURE_INDEX : future_index
    }, 
    { new: true })
    await FUTURE_STOCK.findOneAndUpdate({_id : "65ef67e77423a952a4d05e7a"} ,
        {
        FUTURE_STOCK : future_stock
    }, 
    { new: true })
    .then(() => {
        console.log("instrument update successfully!!");
    })

    
} catch (error) {
      console.log("problem in update instrument");
}

}

export default SaveAll_Instrument;