import User from "../../models/User.model.js";
import ApiResponse from "../../utils/ApiResponse.js";

async function updateEmail ( req , res) {

    try {
    let { email } = req.body ;

    let emailExist = await User.findOne({email});

    if (emailExist) {
       throw new ApiResponse(false , "email already exist" , null)
    }
    else{

    await User.findOneAndUpdate({userid : req.user?.userid} ,
                                { $set: { email } }, 
                                { new: true })
    .then((response) => {
        res.status(200).send(new ApiResponse(true , "updated" , {
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

export default updateEmail;