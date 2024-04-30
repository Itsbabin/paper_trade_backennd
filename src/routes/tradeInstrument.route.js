import { Router } from "express";
import NiftyOption from "../controlers/trade_instrument_controler/NiftyOption.controler.js";
import BankniftyOption from "../controlers/trade_instrument_controler/BankniftyOption.controler.js";
import FinniftyOption from "../controlers/trade_instrument_controler/FinniftyOption.controler.js";
import MidcapniftyOption from "../controlers/trade_instrument_controler/MidcapniftyOption.controler.js";
import FutureIndex from "../controlers/trade_instrument_controler/FutureIndex.controler.js";
import FutureStock from "../controlers/trade_instrument_controler/FutureStock.controler.js";
import SearchInstrument from "../controlers/trade_instrument_controler/SearchInstrument.controler.js";

let router = Router();

router.route("/nifty_option").post(NiftyOption)
router.route("/banknifty_option").post(BankniftyOption)
router.route("/finnifty_option").post(FinniftyOption)
router.route("/midcapnifty_option").post(MidcapniftyOption)
router.route("/future_index").post(FutureIndex)
router.route("/future_stock").post(FutureStock)
router.route("/search").post(SearchInstrument)


export default router ;