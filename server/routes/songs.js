import express from "express";
import { verifyToken } from "../middleware/auth.js";
import { getSong } from "../controllers/songs.js";

const router = express.Router();


router.get("/:id", verifyToken, getSong);

export default router;