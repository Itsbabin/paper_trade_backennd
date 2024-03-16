import mongoose from "mongoose";   

const MIDCPNIFTYSchema = new mongoose.Schema({
    MIDCPNIFTY_OPTION : [{
        token : {
            type : String,
            trim : true,
        },
        symbol : {
            type : String,
            trim : true,
        },
        name : {
            type : String,
            trim : true,
        },
        expiry : {
            type : String,
            trim : true,
        },
        strike : {
            type : String,
            trim : true,
        },
        lotsize : {
            type : String,
            trim : true,
        },
        instrumenttype : {
            type : String,
            trim : true,
        },
        exch_seg : {
            type : String,
            trim : true,
        },
        tick_size : {
            type : String,
            trim : true,
        },
    }]
},{
    timestamps : true
});


const MIDCPNIFTY_OPTION = mongoose.model('MIDCPNIFTY_OPTION',MIDCPNIFTYSchema);

export default MIDCPNIFTY_OPTION ; 