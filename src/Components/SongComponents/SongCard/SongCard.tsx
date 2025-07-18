import type { Song } from "../../../mocked_information/Song/song.type";
import styles from "./SongCardStyles.module.css"
import SongPlayer from "../SongPlayer/SongPlayer";
import { Link } from "react-router";
import { useEffect, useState } from "react";
import { useFavorites } from "../../../Contexts/FavoriteContext/FavoriteContext";



interface SongCardProps {
    song: Song,
    songUrl: string,
    isSelect: boolean,
    callback: (value:string) => void,

}

function SongCard(props: SongCardProps){

    const {song, songUrl} = props;
    const [isFavorite, setIsFavorite] = useState(false);

    const { favorites, setFavorites } = useFavorites();

    const add = () => {
        setFavorites([...favorites, song]);
        setIsFavorite(true)
    }
    const remove = () => {
        setFavorites(favorites.filter(s => s.id !== song.id));
        setIsFavorite(false)
    }
    
    useEffect(() => {
        checkSongInFavorite();
    })

    const handleArticleClick = () => {
        if(props.isSelect){
            props.callback("");
            return
        }
        props.callback(song.id);        
        
            

    }

    const checkSongInFavorite = () => {
        if(favorites.includes(song)){
            setIsFavorite(true)
            return true
        }
        else{
            setIsFavorite(false)
            return false
        }
    }

    return (
        <>
            <article onClick={handleArticleClick} className={styles.song}>
                <img src={song.picture} alt="Song Picture"/>

                <div className={styles.songInfo}>
                    <h2 className={styles.songTitle}>{song.title}</h2>
                    <div className={styles.songDetails}>
                        <span>Artista: {song.artist}</span>
                        <span>Album: {song.album}</span>
                        <span>Categoria: {song.category}</span>
                        <span>Duración: {song.duration}</span>
                    </div>
                </div>
                <Link className={styles.button} to={`/song/${song.id}`}>Ir a la Cancion</Link>
                {isFavorite ? <button className={styles.button} onClick={(e) => {e.stopPropagation(); remove()}}>Eliminar de Favoritos</button> : 
                <button className={styles.button} onClick={(e)=>{e.stopPropagation(); add()}}>Agregar a Favoritos</button>}
            </article>
            {props.isSelect ? <SongPlayer songUrl={songUrl}/> : null}
            
        </>
    )

}

export default SongCard;