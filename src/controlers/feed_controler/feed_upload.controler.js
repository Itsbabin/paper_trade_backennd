import Feed from "../../models/Feed.model.js";
import ApiResponse from "../../utils/ApiResponse.js";
import deleteMeadia from "../../utils/deleteMeadia.js";
import uploadMeadia from "../../utils/uploadMeadia.js"
import fs from 'fs'


const uploadFeed = async (req , res) => {

    await uploadMeadia(`uploads/${req.file.filename}`)
    .then(async (result) => {

    fs.unlink(`uploads/${req.file.filename}`,() => {
        console.log("file deleted");
    })

     await Feed.create({
        author : req.user._id,
        imageURI : result.secure_url ,
        likes : 0,
        comments : [{
            com_author : "commenter profile",
            com_text : "this is comment"
        }]
     })
     .then((response) =>{
         res.status(200).send( new ApiResponse(true , "feed uploaded successfully" , {
            response
         }))
     })
     .catch(async (error) => {
       await deleteMeadia(result.public_id);
        res.status(400).send( new ApiResponse(true , "error in feed upload" , {
            error
         }))
     })
     
    })
    .catch((error) => {
        res.status(400).send( new ApiResponse(true , "error in meadia upload" , {
            error
         }))
    })
}


export default uploadFeed;