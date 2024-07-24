import Song from "../models/Song.js";

/* READ */
export const getSong = async (req, res) => {
    try {
        const { id } = req.params;
        const song = await Song.findById(id);
        res.status(200).json(song);
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
}

/* WRIGHT */
export const createSong = async (req, res) => {
    try {
        const { id } = req.params;
        const {
            name,
            song,
            image,
            plays,
            date,
            genres
        } = req.body;
    
        const newSong = new Song({
            name,
            artist: id,
            song,
            image,
            plays,
            date,
            genres
        })
    
    
        const saveSong = await newSong.save();
    
        res.status(201).json(saveSong)   
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}