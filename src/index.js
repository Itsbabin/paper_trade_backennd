import { PORT } from "../constant.js";
import app from "./App.js";
import ConnectToDB from "./db/db.connect.js";
import dotenv from "dotenv";
import SaveAll_Instrument from "./trade_insttrument/save_all_instrument.js";

dotenv.config();

ConnectToDB();


app.listen(PORT , () => {
    console.log(`app is running on ${PORT}`);
})

// await SaveAll_Instrument();