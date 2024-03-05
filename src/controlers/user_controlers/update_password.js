import User from "../../models/User.model.js";
import ApiResponse from "../../utils/ApiResponse.js";
import bcrypt from 'bcrypt';

async function updatePassword( req , res) {
    let { oldPassword , newPassword } = req.body ;
    try {
        let isSamePassword  = await req.user.isPasswordCorrect(oldPassword)
        console.log(isSamePassword);
    if (!isSamePassword) {
       throw new ApiResponse(false , "old password dose not match 🥲" , null)
    }
    else{
    newPassword =  await bcrypt.hash(newPassword,10);

    await User.findOneAndUpdate({_id : req.user?._id} ,
                                { $set: { password : newPassword } }, 
                                { new: true })
    .then((response) => {
        res.status(200).send(new ApiResponse(true , "password changed 😊!!" , {
            response
        }))
    })
    .catch((err) => {
        res.status(400).send(new ApiResponse(false , "some thing went wrong" , {
            err
        }))
    })       
}
} catch (error) {
    res.status(400).send(new ApiResponse(false , "error occured" , {
        error
    }))
}

}

export default updatePassword;