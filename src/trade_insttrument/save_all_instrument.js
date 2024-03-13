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
    await NIFTY_OPTION.findOneAndUpdate({_id : process.env.NIFTY_OPTION_ID} ,
        {
        NIFTY_OPTION : nifty_option
    }, 
    { new: true })
    await BANKNIFTY_OPTION.findOneAndUpdate({_id : process.env.BANKNIFTY_OPTION_ID} ,
        {
        BANKNIFTY_OPTION : banknifty_option
    }, 
    { new: true })
    await FINNIFTY_OPTION.findOneAndUpdate({_id : process.env.FINNIFTY_OPTION_ID} ,
        {
        FINNIFTY_OPTION : finnifty_option
    }, 
    { new: true })
    await MIDCPNIFTY_OPTION.findOneAndUpdate({_id : process.env.MIDCPNIFTY_OPTION_ID} ,
        {
        MIDCPNIFTY_OPTION : midcap_option
    }, 
    { new: true })
    await FUTURE_INDEX.findOneAndUpdate({_id : process.env.FUTURE_INDEX_ID} ,
        {
        FUTURE_INDEX : future_index
    }, 
    { new: true })
    await FUTURE_STOCK.findOneAndUpdate({_id : process.env.FUTURE_STOCK_ID} ,
        {
        FUTURE_STOCK : future_stock
    },)
    // await NIFTY_OPTION.create(
    //     {
    //     NIFTY_OPTION : nifty_option
    // })
    // await BANKNIFTY_OPTION.create(
    //     {
    //     BANKNIFTY_OPTION : banknifty_option
    // })
    // await FINNIFTY_OPTION.create(
    //     {
    //     FINNIFTY_OPTION : finnifty_option
    // })
    // await MIDCPNIFTY_OPTION.create(
    //     {
    //     MIDCPNIFTY_OPTION : midcap_option
    // })
    // await FUTURE_INDEX.create(
    //     {
    //     FUTURE_INDEX : future_index
    // })
    // await FUTURE_STOCK.create(
    //     {
    //     FUTURE_STOCK : future_stock
    // })
    .then(() => {
        console.log("instrument update successfully!!");
    })

    
} catch (error) {
    console.log(error);
      console.log("problem in update instrument");
}

}

export default SaveAll_Instrument;