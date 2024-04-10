import mongoose from "mongoose";   

const All_StockSchema = new mongoose.Schema({
    All_Stock : [{
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


const All_Stock = mongoose.model('All_Stock',All_StockSchema);

export default All_Stock ; 