import type { Song } from "../../mocked_information/Song/song.type";
import styles from "./SongCardStyles.module.css"

interface SongCardProps {
    props: Song
}

function SongCard({props}: SongCardProps){

    const song: Song = props;

    return (
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
                <button className={styles.playButton}> ▶ </button>

            </article>
        </>
    )

}

export default SongCard;