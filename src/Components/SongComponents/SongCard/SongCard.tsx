import type { Song } from "../../../mocked_information/Song/song.type";
import styles from "./SongCardStyles.module.css"
import SongPlayer from "../SongPlayer/SongPlayer";
import { useRef, useState } from "react";

interface SongCardProps {
    song: Song,
    songUrl: string

}

function SongCard(props: SongCardProps){

    const {song, songUrl} = props;
    const [articleClicked, setArticleClicked] = useState(false);

    const handleArticleClick = () => {
        if(articleClicked){
            setArticleClicked(false);
        }
        else{
            setArticleClicked(true);
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

            </article>
            {articleClicked ? <SongPlayer songUrl={songUrl}/> : null}
            
        </>
    )

}

export default SongCard;