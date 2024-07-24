import express from "express";
import { verifyToken } from "../middleware/auth.js";
import { getAllPlaylists, getPlaylist } from "../controllers/playlists.js";

const router = express.Router();


/* READ */
router.get("/all/:id", verifyToken, getAllPlaylists) // this gets the users playlists
router.get("/:id", verifyToken, getPlaylist)

export default router