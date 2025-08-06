import type { Song } from "../../../mocked_information/Song/song.type";
import styles from "./SongCardStyles.module.css"
import SongPlayer from "../SongPlayer/SongPlayer";
import { Link } from "react-router";
import { useEffect, useState } from "react";
import { useFavorites } from "../../../Contexts/FavoriteContext/FavoriteContext";
import React from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";



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
    }, [favorites, song.id])

    const handleArticleClick = () => {
        if(props.isSelect){
            props.callback("");
            return
        }
        props.callback(song.id.toString());        
        
            

    }

    const checkSongInFavorite = () => {
        if(favorites.some(fav => fav.id === song.id)){
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
                <img src={song.cover} alt="Song Picture"/>

                <div className={styles.songInfo}>
                    <h2 className={styles.songTitle}>{song.title}</h2>
                    <div className={styles.songDetails}>
                        <span>Artista: {song.artist}</span>
                        <span>Album: {song.album}</span>
                        <span>Genero: {song.genre.map((g, i) => (<React.Fragment key={g}>{i > 0 && ' / '}{g}</React.Fragment>))}</span> 
                        <span>Duración: {Math.floor(song.duration / 60).toString().padStart(2, '0')}:{(song.duration % 60).toString().padStart(2, '0')}</span>
                        <span>Año: {song.year}</span>
                        <span>Rating: {song.rating}</span>
                    </div>
                    <div className={styles.songDetails}>
                        <span>Descripción: {song.description}</span>
                    </div>
                </div>
                <Link className={styles.button} to={`/song/${song.id}`}>Ir a la Cancion</Link>
                {isFavorite ? <button title="Eliminar de Favoritos" className={styles.button} onClick={(e) => {e.stopPropagation(); remove()}}><FaHeart style={{ color: 'red' }}/></button> : 
                <button title="Agregar a Favoritos" className={styles.button} onClick={(e)=>{e.stopPropagation(); add()}}><FaRegHeart /></button>}
            </article>
            {props.isSelect ? <SongPlayer songUrl={songUrl}/> : null}
            
        </>
    )

}

export default SongCard;