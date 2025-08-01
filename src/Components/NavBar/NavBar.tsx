import { useQuery } from '@tanstack/react-query';
import DropdownButton from '../DropDownButton/DropDownButton';
import styles from './NavBarStyles.module.css'
import { Link } from 'react-router';
import type { Song } from '../../mocked_information/Song/song.type';
import { musicService } from '../../mocked_information/Song/service';

function NavBar() {

    const { data: generoSongs, isLoading, isError } = useQuery<{genre: string; songs: Song[];}[]>({
  queryKey: ['songs',],
  queryFn: musicService.getGenres,
});

    const generos: string[] = generoSongs?.map(({genre}) => genre) || [];

    return (

        <>
            <div className={styles.container}>
                <Link to={'/'}>Home</Link>
                <Link to={'/addSong'}>Agregar Cancion</Link>
                <Link to={'/category/Favoritos'}>Favoritos</Link>
                <DropdownButton generos={generos}/>
            </div>
        </>
    )

}

export default NavBar;