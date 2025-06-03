import type { ReactNode } from "react";
import styles from "./SongListStyles.module.css";



interface SongListProps {
    title: string,
    children: ReactNode
}

function SongList(props: SongListProps){

    const {title, children} = props;
    

    return (
        <>
            <article className={styles.songList}>
                <h1>{title}</h1>
                {children}
                
            </article>
        </>
    )
    
}

export default SongList;