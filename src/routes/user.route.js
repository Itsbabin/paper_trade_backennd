import { Router } from "express";
import loginUser from "../controlers/user_controlers/loginUser.controler.js";
import signinUser from "../controlers/user_controlers/singin.controler.js";
import updateEmail from "../controlers/user_controlers/update_email.js";
import verifyJwt from "../middleware/verifyJWT.js";

const router = Router();

router.route('/login').post(loginUser);
router.route('/signin').post(signinUser);
router.route('/update').post( verifyJwt ,updateEmail);


export default router;