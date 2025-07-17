import { useParams } from "react-router";
import { longestSongs } from '../../../mocked_information/Song/song.info';
import { sameCategorySongs } from '../../../mocked_information/Song/song.info';
import { artistSongs } from '../../../mocked_information/Song/song.info';
import { mostListenedSongs } from '../../../mocked_information/Song/song.info';
import type { Song } from "../../../mocked_information/Song/song.type";
import styles from './SongCardPageStyles.module.css'
import { Link } from "react-router";
import SongPlayer from "../SongPlayer/SongPlayer";
import SONG_URL from "../../../mocked_information/song.URL";

const getSong = (id:string|undefined) => {
        var song:Song | undefined;
        song = longestSongs.find((song) => song.id === id) || sameCategorySongs.find((song) => song.id === id) || artistSongs.find((song) => song.id === id)
        || mostListenedSongs.find((song) => song.id === id);
         
        return song;
    
    }


function SongCardPage(){
    const {id} = useParams()
    const song = getSong(id!);
    if (song === undefined){
        return (<>No encontrado</>)
    }

    return(
        <>
            <article className={styles.song}>
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
                <Link to={'/'}>Home</Link>

            </article>
            <SongPlayer songUrl={SONG_URL}/>
        </>
    )

}

export default SongCardPage;


