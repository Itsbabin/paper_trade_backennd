import ApiResponse from "../../utils/ApiResponse.js";



async function getUser (req , res) {

    let {name , demo_money , email , oder_book , userid , profile_pic_URL} = req.user

    res.status(200).send(new ApiResponse(true , "user data fetched success fully" , {
        user : {
            name ,
            demo_money,
            email,
            oder_book,
            userid,
            profile_pic_URL
        }}))
}

export default getUser;