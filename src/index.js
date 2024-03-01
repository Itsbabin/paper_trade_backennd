import { PORT } from "../constant.js";
import app from "./App.js";
import ConnectToDB from "./db/db.connect.js";
import dotenv from "dotenv";

dotenv.config();

ConnectToDB();

app.listen(PORT , () => {
    console.log(`app is running on ${PORT}`);
})