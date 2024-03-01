import express from 'express';
import cors from 'cors'
import ApiResponse from './utils/ApiResponse.js';
import UserRouter from './routes/user.route.js';
import FeedRouter from './routes/feed.route.js';
import multer from 'multer';
import { v2 as cloudinary } from 'cloudinary'

const upload = multer({dest : 'uploads/'})
cloudinary.config({ 
    cloud_name: 'dn1zufxma', 
    api_key: '394742956795486', 
    api_secret: 'vvdcuuahS--AHVe167eJ0HFLLfA',
  });
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
    res.send( new ApiResponse(true , "this is home" , {data : "get start"}))
})

app.use('/user',UserRouter);
app.use('/feed',FeedRouter);

//following route just for ttest multer
app.post('/upload',upload.single('photo'), async (req , res) => {
  try {
    const result = await cloudinary.uploader.upload('uploads/d941de67a6fbf346b426173251907d31', {
        resource_type: "auto"
    });
      
    res.send({result})

  } catch (error) {
    res.send({message : error})
  }
})



export default app;