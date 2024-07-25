import express from "express";
import { verifyToken } from "../middleware/auth.js";
import { getSong, likeSong } from "../controllers/songs.js";

const router = express.Router();


router.get("/:id", verifyToken, getSong);
router.patch("/like/:id", verifyToken, likeSong)

export default router;