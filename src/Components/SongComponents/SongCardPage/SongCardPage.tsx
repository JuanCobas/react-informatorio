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
import { useQuery} from '@tanstack/react-query';
import {musicService} from '../../../mocked_information/Song/service'
import React from "react";



function SongCardPage(){
    const {id} = useParams()
    const { data: song, isLoading, isError } = useQuery<Song>({
    queryKey: ['song', id],
    queryFn: () => musicService.getSongById(id!.toString()),
});
    if(isLoading){
        return <>Cargando...</>
    }
    if(song == undefined || isError)
    {
        return <>Cancion no encontrada!</>
    }
    return(
        <>
            <article className={styles.song}>
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
                </div>
                <Link className={styles.button} to={'/'}>Home</Link>

            </article>
            <SongPlayer songUrl={SONG_URL}/>
        </>
    )

}

export default SongCardPage;


