import User from "../../models/User.model.js";
import ApiResponse from "../../utils/ApiResponse.js";

async function updateUserid ( req , res) {

    try {
    let { userid } = req.body ;

    let useridExist = await User.findOne({userid});

    if (useridExist) {
       throw new ApiResponse(false , "userid already exist" , null)
    }
    else{

    await User.findOneAndUpdate({_id : req.user?._id} ,
                                { $set: { userid } }, 
                                { new: true })
    .then((response) => {
        res.status(200).send(new ApiResponse(true , "userid updated !!" , {
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

export default updateUserid ;