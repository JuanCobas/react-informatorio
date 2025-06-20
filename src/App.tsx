import './App.css'
import type { Song } from './mocked_information/Song/song.type'
import { longestSongs } from './mocked_information/Song/song.info'
import { sameCategorySongs } from './mocked_information/Song/song.info';
import { artistSongs } from './mocked_information/Song/song.info';
import { mostListenedSongs } from './mocked_information/Song/song.info';
import SongList from './Components/SongComponents/SongList/SongList';
import SongCard from './Components/SongComponents/SongCard/SongCard';
import NavBar from './Components/NavBar/NavBar';
import SONG_URL from './mocked_information/song.URL';
import SongFilterForm from './Components/SongComponents/SongFilterForm/songFilterForm';
import { use, useEffect, useState } from 'react';

function App() {
  

  const songsURL : string = SONG_URL;
  const [filter, setFilter] = useState("");
  const [filteredLongSongsList, setFilteredLongSongsList] = useState<Song[]>(longestSongs);
  const [filteredSameCategorySongsList, setFilteredSameCategorySongsList] = useState<Song[]>(sameCategorySongs);
  const [filteredArtistSongsList, setFilteredArtistSongsList] = useState<Song[]>(artistSongs);
  const [filteredMostListenedSongsList, setFilteredMostListenedSongsList] = useState<Song[]>(mostListenedSongs);

  
  useEffect(() => {
    filterSong();
  }, [filter]);
  
  const filterSong = () => {
    if(!filter){
      setFilteredLongSongsList(longestSongs);
      setFilteredSameCategorySongsList(sameCategorySongs);
      setFilteredArtistSongsList(artistSongs);
      setFilteredMostListenedSongsList(mostListenedSongs);
    }
    else{
      setFilteredLongSongsList( longestSongs.filter((song) => song.title.toLowerCase().includes(filter)))
      setFilteredSameCategorySongsList( sameCategorySongs.filter((song) => song.title.toLowerCase().includes(filter)))
      setFilteredArtistSongsList( artistSongs.filter((song) => song.title.toLowerCase().includes(filter)))
      setFilteredMostListenedSongsList( mostListenedSongs.filter((song) => song.title.toLowerCase().includes(filter)))
    }
    
    
  }


  return (
    <>
      <NavBar/>
      <SongFilterForm callback={setFilter}/>
      <SongList title = "Canciones de Mayor Duracion" >
          {filteredLongSongsList.map((song) => (<SongCard key={song.id} song={song} songUrl={songsURL}/>))}
      </SongList>
      <SongList title = "Canciones de Misma Categoria">
          {filteredSameCategorySongsList.map((song) => (<SongCard key={song.id} song={song} songUrl={songsURL}/>))}
      </SongList>
      <SongList title = {`Canciones de ${artistSongs[0].artist}`}>
          {filteredArtistSongsList.map((song) => (<SongCard key={song.id} song={song} songUrl={songsURL}/>))}
      </SongList>
      <SongList title = "Canciones Mas Escuchadas">
          {filteredMostListenedSongsList.map((song) => (<SongCard key={song.id} song={song} songUrl={songsURL}/>))}
      </SongList>
    </>
  )
}

export default App
