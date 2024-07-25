import express from "express";
import { verifyToken } from "../middleware/auth.js";
import { getAllUserPlaylists, getPlaylist, likePlaylist } from "../controllers/playlists.js";

const router = express.Router();

/* READ */
router.get("/all/:id", verifyToken, getAllUserPlaylists) // this gets the users playlists
router.get("/:id", verifyToken, getPlaylist)
router.patch("/like/:id", verifyToken, likePlaylist)

export default router