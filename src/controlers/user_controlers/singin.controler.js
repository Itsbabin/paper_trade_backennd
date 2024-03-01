import User from "../../models/User.model.js";
import ApiResponse from "../../utils/ApiResponse.js";

 async function signinUser(req,res) {

    const {name , userid , email , password} = req.body ;

  
       
        let id_user = await User.findOne({userid});
        let e_user = await User.findOne({email});

    console.log(id_user);
    console.log(e_user);

 if(!id_user && !e_user){

    try {
        await User.create({
            name ,
            email ,
            userid ,
            password 
        })
        .then((response) => {
            let token = response.genarateToken()
            res.status(200).send(new ApiResponse(true , "user signed in successfully" , {
                response : token
            }))
        })
    } catch (error) {
        res.status(400).json(new ApiResponse(false , "some error occoured in time of creating profile" , {
            error 
        }))
    }

}
else if(id_user && e_user){
    res.status(400).json(new ApiResponse(false , "userid and email already exist" , 
        null 
    ))
}
else if(id_user){
    res.status(400).json(new ApiResponse(false , "userid  already exist" , 
        null 
    ))
}
else if(e_user){
    res.status(400).json(new ApiResponse(false , "email  already exist" , 
        null 
    ))
}
}

export default signinUser;