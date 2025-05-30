import './App.css'
import type { Song } from './mocked_information/Song/song.type'
import { longestSongs } from './mocked_information/Song/song.info'
import { sameCategorySongs } from './mocked_information/Song/song.info';
import { artistSongs } from './mocked_information/Song/song.info';
import { mostListenedSongs } from './mocked_information/Song/song.info';
import SongList from './Components/SongList/SongList';
import SongCard from './Components/SongCard/SongCard';
import NavBar from './Components/NavBar/NavBar';

function App() {
  
  const longSongsList : Song[] = longestSongs;
  const sameCategorySongsList : Song[] = sameCategorySongs;
  const artistSongsList : Song[] = artistSongs;
  const mostListenedSongsList : Song[] = mostListenedSongs;

  return (
    <>
      <NavBar/>
      <SongList title = "Canciones de Mayor Duracion" >
          {longSongsList.map((song) => (<SongCard key={song.id} props={song}/>))}
      </SongList>
      <SongList title = "Canciones de Misma Categoria">
          {sameCategorySongsList.map((song) => (<SongCard key={song.id} props={song}/>))}
      </SongList>
      <SongList title = {`Canciones de ${artistSongs[0].artist}`}>
          {artistSongsList.map((song) => (<SongCard key={song.id} props={song}/>))}
      </SongList>
      <SongList title = "Canciones Mas Escuchadas">
          {mostListenedSongsList.map((song) => (<SongCard key={song.id} props={song}/>))}
      </SongList>
    </>
  )
}

export default App
