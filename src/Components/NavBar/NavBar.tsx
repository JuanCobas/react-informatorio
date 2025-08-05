import { useQuery } from '@tanstack/react-query';
import DropdownButton from '../DropDownButton/DropDownButton';
import styles from './NavBarStyles.module.css'
import { Link } from 'react-router';
import type { Song } from '../../mocked_information/Song/song.type';
import { musicService } from '../../mocked_information/Song/service';
import { FaHome, FaMusic } from 'react-icons/fa';

function NavBar() {
  const { data: generoSongs, isLoading, isError } = useQuery<{ genre: string; songs: Song[] }[]>({
    queryKey: ['songs'],
    queryFn: musicService.getGenres,
  });

  const generos: string[] = generoSongs?.map(({ genre }) => genre) || [];

  return (
  <div className={styles.container}>

    <div className={styles.logoSection}>
      <FaMusic className={styles.logoIcon} />
      <span className={styles.logoText}>Music Hub</span>
    </div>

    <div className={styles.navLinks}>
      <Link to="/"><FaHome className={styles.homeIcon}/></Link>
      <Link to="/addSong">Agregar Canción</Link>
      <Link to="/category/Favoritos">Favoritos</Link>
      <DropdownButton generos={generos} />
    </div>

    <div className={styles.spacer}></div>
  </div>
);
}
export default NavBar