import { Router } from "express";
import loginUser from "../controlers/user_controlers/loginUser.controler.js";
import signinUser from "../controlers/user_controlers/singin.controler.js";

const router = Router();

router.route('/login').post(loginUser);
router.route('/signin').post(signinUser);


export default router;