import mongoose from "mongoose";
import User from "../../models/User.model.js";
import ApiResponse from '../../utils/ApiResponse.js'


async function Sell (req , res) {
        let newAmount ;
        let { exit_amount , time , OderId } = req.body ;
        
        newAmount = (req.user.demo_money + exit_amount) ;

        let sellableMal = req.user.oder_book.map((element) => {
            if (element._id.toHexString() === OderId) {
                element.active = false;
                element.exit_amount = exit_amount ;
                element.exit_time = time
                 return element ;
                }
                else return element ;
        })

        await User.findOneAndUpdate({_id : req.user._id} ,
                {
                 demo_money : newAmount ,
                 oder_book : [...sellableMal]
            }, 
            { new: true })
        .then((response) => {
                res.status(200).send(new ApiResponse(true , "oder exicute successfully" , {
                        response
                }))
        })
        .catch((err) => {
                res.status(400).send(new ApiResponse(false , "oder exicute successfully" , {
                        err
                }))
        })
}

export default Sell;