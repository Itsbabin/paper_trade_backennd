import mongoose from "mongoose";
import { DATA_BASE, DB_URI } from "../constant.js";

const ConnectToDB = async () => {
    try {
       await mongoose.connect(`${DB_URI}/${DATA_BASE}`)
       .then((response) =>{
        console.log("connectted to DB successfully !!!");
       })
       .catch((error) => {
          console.log(error);
       })
    } catch (error) {
        console.log(error);
    }
}

export default ConnectToDB;