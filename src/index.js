import app from "./App.js";
import ConnectToDB from "./db/db.connect.js";

ConnectToDB();

app.listen(8000 , () => {
    console.log("app is running");
})