import type { ReactNode } from "react";



interface SongListProps {
    title: string,
    children: ReactNode
}

function SongList(props: SongListProps){

    const {title, children} = props;
    

    return (
        <>
            <article className="song-list">
                <h1>{title}</h1>
                {children}
                
            </article>
        </>
    )
    
}

export default SongList;