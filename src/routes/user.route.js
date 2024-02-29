import { Router } from "express";
import loginUser from "../controlers/loginUser.controler.js";

const router = Router();

router.route('/login').post(loginUser);


export default router;