import './App.css'

import { longestSongs } from './mocked_information/Song/song.info'
import { sameCategorySongs } from './mocked_information/Song/song.info';
import { artistSongs } from './mocked_information/Song/song.info';
import { mostListenedSongs } from './mocked_information/Song/song.info';
import SongList from './Components/SongComponents/SongList/SongList';
import SongCard from './Components/SongComponents/SongCard/SongCard';
import NavBar from './Components/NavBar/NavBar';
import SONG_URL from './mocked_information/song.URL';
import SongFilterForm from './Components/SongComponents/SongFilterForm/songFilterForm';
import { useState } from 'react';

function App() {
  

  const songsURL : string = SONG_URL;

  const [URLQueryValue, setURlQueryValue] = useState(() => new URLSearchParams(window.location.search));
  const [filter, setFilter] = useState(() => URLQueryValue.get("filter") ?? "");
  
  
  const filteredLongSongsList = longestSongs.filter((song) => song.title.toLowerCase().includes(filter.toLowerCase()));
  const filteredSameCategorySongsList = sameCategorySongs.filter((song) => song.title.toLowerCase().includes(filter));
  const filteredArtistSongsList = artistSongs.filter((song) => song.title.toLowerCase().includes(filter));
  const filteredMostListenedSongsList = mostListenedSongs.filter((song) => song.title.toLowerCase().includes(filter));
  
  const setNewURLQuery = (filter:string) => {
    const query = new URLSearchParams(window.location.search);
    query.set("filter", filter);
    setURlQueryValue(query);
    const newURL = [window.location.pathname, query].filter(Boolean).join('?');
    window.history.pushState({},"",newURL);
  }

  

  

  return (
    <>
      <NavBar/>
      <SongFilterForm callback={setFilter} updateURL={setNewURLQuery}/>
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
