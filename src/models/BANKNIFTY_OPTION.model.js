import mongoose from "mongoose";   

const BANKNIFTYSchema = new mongoose.Schema({
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
        }
},{
    timestamps : true
});


const BANKNIFTY_OPTION = mongoose.model('BANKNIFTY_OPTION',BANKNIFTYSchema);

export default BANKNIFTY_OPTION ; 