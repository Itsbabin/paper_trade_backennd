import { Router } from "express";
import uploadFeed from "../controlers/feed_controler/feed_upload.controler.js";
import verifyJwt  from "../middleware/verifyJWT.js"
import multer from "multer";
import updatelike from "../controlers/feed_controler/update_like.js";
import comment_new from "../controlers/feed_controler/comment_new.js";
import FetchFeed from "../controlers/feed_controler/fetchFeed.controler.js";
import FetchpersonalFeed from "../controlers/feed_controler/FetchpersonalFeed.js";

const upload = multer({dest : 'uploads/'})
const router = Router();

router.route('/upload').post(verifyJwt,upload.single('feed'),uploadFeed);
router.route('/like').post(verifyJwt,updatelike);
router.route('/comment').post(verifyJwt,comment_new);
router.route('/fetch').get(verifyJwt,FetchFeed);
router.route('/fetch/personal').get(verifyJwt,FetchpersonalFeed);


export default router;