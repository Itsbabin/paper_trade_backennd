import express from 'express';
import cors from 'cors'
import ApiResponse from './utils/ApiResponse.js';
import UserRouter from './routes/user.route.js';

const app = express();

app.use(cors());
app.use(express.json({
    limit: "20kb",
}))
app.use(express.urlencoded({
    extended: true,
    limit: "20kb"
}))


app.get('/',(req,res) => {
    
    res.send( new ApiResponse(true , "message" , {data : "data"}))
})

app.use('/user',UserRouter);

export default app;