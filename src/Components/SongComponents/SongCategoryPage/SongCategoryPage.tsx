import { longestSongs, sameCategorySongs, artistSongs, mostListenedSongs } from '../../../mocked_information/Song/song.info'

import SongList from '../SongList/SongList';
import SongCard from '../SongCard/SongCard';
import SONG_URL from '../../../mocked_information/song.URL';
import SongFilterForm from '../SongFilterForm/songFilterForm';
import { useState } from 'react';
import { useParams } from 'react-router';

function SongCategoryPage() {
  

  const songsURL : string = SONG_URL;

  const [URLQueryValue, setURlQueryValue] = useState(() => new URLSearchParams(window.location.search));
  const [filter, setFilter] = useState(() => URLQueryValue.get("filter") ?? "");
  
  
  const filteredLongSongsList = longestSongs.filter((song) => song.title.toLowerCase().includes(filter.toLowerCase()));
  const filteredSameCategorySongsList = sameCategorySongs.filter((song) => song.title.toLowerCase().includes(filter));
  const filteredArtistSongsList = artistSongs.filter((song) => song.title.toLowerCase().includes(filter));
  const filteredMostListenedSongsList = mostListenedSongs.filter((song) => song.title.toLowerCase().includes(filter));

  const {id} = useParams();
  
  const setNewURLQuery = (filter:string) => {
    const query = new URLSearchParams(window.location.search);
    query.set("filter", filter);
    setURlQueryValue(query);
    const newURL = [window.location.pathname, query].filter(Boolean).join('?');
    window.history.pushState({},"",newURL);
  }

  const [selectedSong, setSelectedSong] = useState<string>("")


  return (
    <>
    <div>
      
      <div>
        <SongFilterForm callback={setFilter} updateURL={setNewURLQuery}/>
      </div>
      
      {id === '1' && <SongList title = "Canciones de Mayor Duracion" >
          {filteredLongSongsList.map((song) => (<SongCard isSelect={selectedSong === song.id} callback={setSelectedSong} key={song.id} song={song} songUrl={songsURL}/>))}
      </SongList>}
      {id === '2' && <SongList title = "Canciones de Misma Categoria">
          {filteredSameCategorySongsList.map((song) => (<SongCard isSelect={selectedSong === song.id} callback={setSelectedSong} key={song.id} song={song} songUrl={songsURL}/>))}
      </SongList>}
      {id === '3' && <SongList title = {`Canciones de ${artistSongs[0].artist}`}>
          {filteredArtistSongsList.map((song) => (<SongCard isSelect={selectedSong === song.id} callback={setSelectedSong} key={song.id} song={song} songUrl={songsURL}/>))}
      </SongList>}
      {id === '4' && <SongList title = "Canciones Mas Escuchadas">
          {filteredMostListenedSongsList.map((song) => (<SongCard isSelect={selectedSong === song.id} callback={setSelectedSong} key={song.id} song={song} songUrl={songsURL}/>))}
      </SongList>}
    </div>
      
    </>
  )
}

export default SongCategoryPage