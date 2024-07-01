import { Router } from "express";
import verifyJwt from "../middleware/verifyJWT.js";
import GetWatchlist from "../controlers/watchlist_controler/getWatchlist.controler.js";
import UpdateWatchlist from "../controlers/watchlist_controler/updateWatchlist.controler.js";
import deleteWatchlist from "../controlers/watchlist_controler/deleteWatchlist.controler.js";


const router = Router();

router.route('/').get(verifyJwt,GetWatchlist);
router.route('/update').post(verifyJwt, UpdateWatchlist);
router.route('/delete').post(verifyJwt, deleteWatchlist);


export default router;