import User from "../../models/User.model.js";
import ApiResponse from "../../utils/ApiResponse.js";
import uploadMeadia from "../../utils/uploadMeadia.js";
import fs from 'fs'


export default async function profilePicUpload (req,res) {
    console.log(req.file);

    let result = await uploadMeadia(`uploads/${req.file.filename}`)
    
    fs.unlink(`uploads/${req.file.filename}`,() => {
        console.log("file deleted");
    })

    await User.findOneAndUpdate({_id : req.user?._id} ,
        { $set: { profile_pic_URL : result.secure_url } }, 
        { new: true })
        .then((response) => {
            console.log(response);
            res.status(200).send(new ApiResponse(true , "uploaded succcess fully😊!!" , {
                 response
            }))
        })
        .catch((error) => {
            res.status(400).send(new ApiResponse(false , "some thing went wrong" , {
                error
            }))
        })

}
