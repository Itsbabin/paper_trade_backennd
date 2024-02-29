import mongoose from "mongoose";   
import bcrypt from 'bcrypt'

const UserSchema = new mongoose.Schema({
    name : {
        type : String,
        require : true,
        trim : true,
    },
    userid : {
        type : String,
        require : true,
        trim : true,
        unique : true
    },
    email : {
        type : String,
        require : true,
        trim : true,
        unique : true
    },
    password : {
        type : String,
        require : true,
        trim : true,
        unique : true
    }

},{
    timestamps : true
});

UserSchema.pre("save", async function (next) {
    this.password = await bcrypt.hash(this.password,10);
    next();
})

const User = mongoose.model('User',UserSchema);

export default User ; 