import { Router } from "express";
import uploadFeed from "../controlers/feed_controler/feed_upload.controler.js";
import verifyJwt  from "../middleware/verifyJWT.js"
import multer from "multer";
import updatelike from "../controlers/feed_controler/update_like.js";

const upload = multer({dest : 'uploads/'})
const router = Router();

router.route('/upload').post(verifyJwt,upload.single('feed'),uploadFeed);
router.route('/like').post(verifyJwt,updatelike);


export default router;