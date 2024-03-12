import { PORT } from "../constant.js";
import app from "./App.js";
import ConnectToDB from "./db/db.connect.js";
import dotenv from "dotenv";
import SaveAll_Instrument from "./trade_insttrument/save_all_instrument.js";

dotenv.config();



app.listen(PORT , () => {
    console.log(`app is running on ${PORT}`);
})


 async function scheduleFunction() {

   await ConnectToDB(); 
                    // after connect with DB the rutine
    var now = new Date();
    var hours = now.getHours();
                    
   await SaveAll_Instrument();

    setInterval(async function() {
        if (hours === 2) {   // cheack if it 2 A.M or not
            await SaveAll_Instrument();
        }
    }, 3600000); // runs in every hour
}

// Start scheduling the function
scheduleFunction();
