import { useRef, useState} from "react";

function SongPlayer() {
    const audioRef = useRef<HTMLAudioElement>(null);

    const handlePlay = () => {
        audioRef.current?.play();
    }

    const handlVolume = (value: number) =>{
        if(audioRef.current){
            audioRef.current.volume = value;
        }
        
    }

    const handlePause = () =>{
        audioRef.current?.pause();
    }

    const handleStop = () =>{
       
        if(audioRef.current){
            audioRef.current?.pause();
            audioRef.current.currentTime = 0;
        }
        
    }

    const handleTime = (value: number) => {
        if(audioRef.current){
            audioRef.current.currentTime = value;
        }
    }
    

    return(
        <>
            <audio ref={audioRef} controls src="https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3"></audio>
            <button onClick={handlePlay}> ▶ </button>

            <input type="range" value={audioRef.current?.currentTime} min="0" max={audioRef.current?.duration} step="1" 
            onChange={(value) => handleTime(Number(value.target.value))} />

            <input type="range" min="0" max="1" step="0.01" onChange={(value) => handlVolume(Number(value.target.value))} />
            <button onClick={handlePause}> ⏸ </button>
            <button onClick={handleStop}> ⏹ </button>

        </>
    )

}

export default SongPlayer;