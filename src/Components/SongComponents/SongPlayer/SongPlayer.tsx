import { useRef, useState, type SyntheticEvent} from "react";
import {formatTime} from '../../../Utils/UtilsTime'
import styles from './SongPlayerStyles.module.css'

type songPlayerProp = {
    songUrl : string
}

function SongPlayer(props : songPlayerProp) {
    const audioRef = useRef<HTMLAudioElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const [duration, setDuration] = useState<number>(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [isPlaying, setIsPlatying] = useState(false);
    const  {songUrl} = props;

    


    const handlePlay = () => {
        audioRef.current?.play();
        setIsPlatying(true);
    }

    const handlVolume = (value: number) =>{
        if(audioRef.current){
            audioRef.current.volume = value;
        }
        
    }

    const handlePause = () =>{
        audioRef.current?.pause();
        setIsPlatying(false);
    }

    const handleStop = () =>{
       
        if(audioRef.current){
            audioRef.current?.pause();
            audioRef.current.currentTime = 0;
            setIsPlatying(false);
        }
        
    }

    const handleTime = (value: number) => {
        if(audioRef.current){
            audioRef.current.currentTime = value;
            
        }
    }

    const handleTimeUpdate = (e: SyntheticEvent<HTMLAudioElement, Event>) => {
        if(inputRef.current){
            setCurrentTime(e.currentTarget.currentTime)
        }
    }
    

    

    return(
        <>
            <div>
                <audio ref={audioRef} onEnded={() => setIsPlatying(false)} onLoadedMetadata={() => {if(audioRef.current){ setDuration(audioRef.current.duration)}}} onTimeUpdate={(e) =>handleTimeUpdate(e)} 
                src={songUrl}></audio>

                <div className={styles.inputTimeContainer}>
                    <label htmlFor="time">{formatTime(currentTime)} / {formatTime(duration)}</label>
                    <input id="time" ref={inputRef} value={currentTime} type="range" min="0" max={duration} step="0.001" 
                    onChange={(value) => handleTime(Number(value.target.value))} />
                </div>
                
                <div className={styles.buttonContainer}>
                    {!isPlaying ? <button className={styles.playButton} onClick={handlePlay}> ▶ </button> : <button className={styles.playButton} onClick={handlePause}> ⏸ </button>}
                    <button className={styles.stopButton} onClick={handleStop}> ⏹ </button>
                    <label htmlFor="volume">Volumen</label>
                    <input id="volume" type="range" min="0" max="1" step="0.01" onChange={(value) => handlVolume(Number(value.target.value))} />
                </div>
                
                
            </div>
        </>
    )

}

export default SongPlayer;