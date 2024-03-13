import { Router } from "express";
import NiftyOption from "../controlers/trade_instrument_controler/NiftyOption.controler.js";
import BankniftyOption from "../controlers/trade_instrument_controler/BankniftyOption.controler.js";
import FinniftyOption from "../controlers/trade_instrument_controler/FinniftyOption.controler.js";
import MidcapniftyOption from "../controlers/trade_instrument_controler/MidcapniftyOption.controler.js";
import FutureIndex from "../controlers/trade_instrument_controler/FutureIndex.controler.js";
import FutureStock from "../controlers/trade_instrument_controler/FutureStock.controler.js";

let router = Router();

router.route("/nifty_option").get(NiftyOption)
router.route("/banknifty_option").get(BankniftyOption)
router.route("/finnifty_option").get(FinniftyOption)
router.route("/midcapnifty_option").get(MidcapniftyOption)
router.route("/future_index").get(FutureIndex)
router.route("/future_stock").get(FutureStock)


export default router ;