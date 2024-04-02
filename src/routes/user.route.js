import { Router } from "express";
import loginUser from "../controlers/user_controlers/loginUser.controler.js";
import signinUser from "../controlers/user_controlers/singin.controler.js";
import updateEmail from "../controlers/user_controlers/update_email.js";
import updateUserid from "../controlers/user_controlers/update_userid.js";
import verifyJwt from "../middleware/verifyJWT.js";
import updatePassword from "../controlers/user_controlers/update_password.js";
import profilePicUpload from "../controlers/user_controlers/upload_proofile_pic.js";
import getUser from "../controlers/user_controlers/getUser.controler.js";
import multer from 'multer';


const upload = multer({dest : 'uploads/'})
const router = Router();

router.route('/profile').get(verifyJwt,getUser);
router.route('/singin').post(signinUser);
router.route('/login').post(loginUser);
router.route('/update/email').post( verifyJwt ,updateEmail);
router.route('/update/userid').post( verifyJwt , updateUserid);
router.route('/update/password').post( verifyJwt , updatePassword);
router.route('/update/profilePic').post(verifyJwt,upload.single('profilePic'),profilePicUpload);


export default router;

