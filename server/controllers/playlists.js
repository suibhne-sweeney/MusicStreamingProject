import PlayList from "../models/Playlist.js";
import User from "../models/User.js";

/* READ */
export const getAllPlaylists = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);
        const playlists = await Promise.all(
            user.playlists.map((id) => PlayList.findById(id))
        )

        const formatedPlaylists = await playlists.map(({_id, name, description, image, songs, user}) => {
            return {_id, name, description, image, songs, user}  
        })

        res.status(200).json(formatedPlaylists)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

export const getPlaylist = async (req, res) => {
    try {
        const { id } = req.params;
        const playlist = await PlayList.findById(id)
        
        res.status(200).json(playlist);
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}


/* WRIGHT */
export const createPlayList = async (req, res) => {
    try{
        const { id } = req.params;
        const {
            name, 
            description,
            image,
            songs
        } = req.body

        const newPlayList = new PlayList({
            name,
            description,
            image,
            songs,
            user: id
        })

        const savePlayList = await newPlayList.save()

        await User.findByIdAndUpdate(
            id, { $addToSet: {playlists: savePlayList.id} }
        )

        res.status(201).json(savePlayList)
    }catch(err){
        res.status(500).json({error: err.message})
    }
}

