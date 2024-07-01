import express from 'express';
import cors from 'cors'
import ApiResponse from './utils/ApiResponse.js';
import UserRouter from './routes/user.route.js';
import FeedRouter from './routes/feed.route.js';
import InstrumentRouter from './routes/tradeInstrument.route.js';
import OderRouter from './routes/oder.route.js'
import WatchlistRouter from './routes/watchlist.route.js'
import cookieParser from 'cookie-parser';

const app = express();

app.use(cors({
    origin  : process.env.CORS_ORIGIN,
    credentials : true
}));
app.use(express.json({
    limit: "20kb",
}))
app.use(express.urlencoded({
    extended: true,
    limit: "20kb"
}))

app.use(cookieParser());

app.get('/',(req,res) => {
    res.send( new ApiResponse(true , "this is home" , {data : "get start"}))
})

app.use('/user',UserRouter);
app.use('/feed',FeedRouter);
app.use('/trade/instrument',InstrumentRouter);
app.use('/trade',OderRouter);
app.use('/watchlist',WatchlistRouter);



export default app;