// It takes all the requests and routes accourding to it

import express from "express";
const router = express.Router();

/* Imports from another files */
import {
  getBestStories,
  getTopStories,
  getNewStories,
} from "../Controllers/news.js";

router.get("/top-news", getTopStories);
router.get("/best-news", getBestStories);
router.get("/latest-news", getNewStories);

export default router;
