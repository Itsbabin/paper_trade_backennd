import axios from "axios";
import NIFTY_OPTION from "../models/NIFTY_OPTION.model.js";
import BANKNIFTY_OPTION from "../models/BANKNIFTY_OPTION.model.js";

async function SaveAll_Instrument () {

    let future_index = [] ;
    let nifty_option = [] ;
    let midcap_option = [] ;
    let banknifty_option = [] ;
    let finnifty_option = [] ;
    let future_stock = [] ;

    await axios("https://margincalculator.angelbroking.com/OpenAPI_File/files/OpenAPIScripMaster.json")
    .then(async (response) => {
        response = response.data;
    for (let index = 0; index < response.length; index++) {
        const element = response[index];
        // if (element.exch_seg === "NFO" && element.instrumenttype === "FUTSTK") {
        //     future_stock = [...future_stock , element]
        // }
        // else if (element.exch_seg === "NFO" && element.instrumenttype === "FUTIDX") {
        //     future_index = [...future_index,element];
        //    }
       /* else */ if (element.exch_seg === "NFO" && element.instrumenttype === "OPTIDX" && element.name === "NIFTY"){
            nifty_option = [...nifty_option,element];
        }
        // else if (element.exch_seg === "NFO" && element.instrumenttype === "OPTIDX" && element.name === "MIDCPNIFTY"){
        //     midcap_option = [...midcap_option,element];
        // }
        else if (element.exch_seg === "NFO" && element.instrumenttype === "OPTIDX" && element.name === "BANKNIFTY"){
            banknifty_option = [...banknifty_option,element];
        }
        // else if (element.exch_seg === "NFO" && element.instrumenttype === "OPTIDX" && element.name === "FINNIFTY"){
        //     finnifty_option = [...finnifty_option,element];
        // }

    }
})
await NIFTY_OPTION.create({
    NIFTY_OPTION : nifty_option
})
await BANKNIFTY_OPTION.create({
    BANKNIFTY_OPTION : banknifty_option
})
.then(() => {
    console.log("instrument update successfully!!");
})
.catch(() => {
    console.log("problem in update instrument");
})
}

export default SaveAll_Instrument;