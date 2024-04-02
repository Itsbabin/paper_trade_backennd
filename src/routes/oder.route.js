import { Router } from "express";
import verifyJwt from "../middleware/verifyJWT.js";
import Order from "../controlers/oder_controler/order.controler.js";
import Sell from "../controlers/oder_controler/sell.controler.js";



 let router = Router() ;

 router.route('/oder/buy').put(verifyJwt , Order);
 router.route('/oder/sell').put(verifyJwt , Sell);


 export default router ;