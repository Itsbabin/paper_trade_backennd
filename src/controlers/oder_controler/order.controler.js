import User from "../../models/User.model.js";
import ApiResponse from '../../utils/ApiResponse.js'


async function Order (req , res) {
        let newAmount ;
        let { amount , time , name} = req.body ;
        
        newAmount = (req.user.demo_money - amount);

        await User.findOneAndUpdate({_id : req.user._id} ,
                {
                 demo_money : newAmount ,
                 oder_book : [...req.user.oder_book , {
                        name ,
                        amount ,
                        time ,
                        type : true,        
                        active : true,        
                 }]
            }, 
            { new: true })
        .then((response) => {

                res.status(200).send(new ApiResponse(true , "oder exicute successfully" , {
                        response
                }))
        })
        .catch((err) => {
                res.status(400).send(new ApiResponse(false , "error in updating oderbook" , {
                        err
                }))
        })
}

export default Order;