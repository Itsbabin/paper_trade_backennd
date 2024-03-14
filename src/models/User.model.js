import mongoose from "mongoose";   
import bcrypt from 'bcrypt'
import  jwt  from "jsonwebtoken";

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
    profile_pic_URL : {
        type : String,
        trim : true,
    },
    demo_money : {
        type : Number,
        trim : true,
    },
    oder_book : [{
        name : {
            type : String,
            trim : true ,
        },
        buy : {
            type : Number,
            trim : true,
        },
        buy_date : {
            type : String,
            trim : true,
        },
        sell : {
            type : Number,
            trim : true,
        },
        sell_date : {
            type : String,
            trim : true,
        }
    }],
    password : {
        type : String,
        require : true,
        trim : true,
    }

},{
    timestamps : true
});

UserSchema.pre("save", async function (next) {
    this.password = await bcrypt.hash(this.password,10);
    next();
})

UserSchema.methods.genarateToken = function () {
    const token = jwt.sign({_id : this._id} , process.env.SECRET ) ;
    return token ;
}

UserSchema.methods.isPasswordCorrect = function (password) {
    return bcrypt.compare(password , this.password);
}

const User = mongoose.model('User',UserSchema);

export default User ; 