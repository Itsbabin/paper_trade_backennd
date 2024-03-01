import { Router } from "express";
import uploadFeed from "../controlers/feed_controler/feed_upload.controler.js";

const router = Router();

router.route('/upload').post(uploadFeed);

export default router;