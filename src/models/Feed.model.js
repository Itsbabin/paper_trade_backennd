import mongoose from "mongoose";   
import { Schema } from "mongoose";

const FeedSchema = new mongoose.Schema({
    author : {
        type : Schema.Types.ObjectId,
        ref : "User",
        require : true,
        trim : true,
    },
    imageURI : {
        type : String,
        trim : true,
    },
    likes : {
        type : Number,
    },
    comments : [{
        com_author : {
            type : Schema.Types.ObjectId,
            ref : "User",
            trim : true,
        },
        com_text : {
            type : String,
            trim : true,
        }
    }]
},{
    timestamps : true
});

const Feed = mongoose.model('Feed',FeedSchema);

export default Feed ; 