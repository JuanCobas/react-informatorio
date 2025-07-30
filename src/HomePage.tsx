import './App.css'


import SongList from './Components/SongComponents/SongList/SongList';
import SongCard from './Components/SongComponents/SongCard/SongCard';
import SONG_URL from './mocked_information/song.URL';
import SongFilterForm from './Components/SongComponents/SongFilterForm/songFilterForm';
import { useState } from 'react';
import {musicService} from './mocked_information/Song/service'
import type { Song } from './mocked_information/Song/song.type';
import { useQuery} from '@tanstack/react-query';

function HomePage() {
  

  const songsURL : string = SONG_URL;

  const [URLQueryValue, setURlQueryValue] = useState(() => new URLSearchParams(window.location.search));
  const [filter, setFilter] = useState(() => URLQueryValue.get("filter") ?? "");
  const [selectedSong, setSelectedSong] = useState<string>("")
  const { data: songs, isLoading, isError } = useQuery<Song[]>({
  queryKey: ['songs', filter],
  queryFn: () => musicService.searchSongs(filter),
});

  
  const setNewURLQuery = (filter:string) => {
    const query = new URLSearchParams(window.location.search);
    query.set("filter", filter);
    setURlQueryValue(query);
    const newURL = [window.location.pathname, query].filter(Boolean).join('?');
    window.history.pushState({},"",newURL);
  }
  


  return (
    <>
    <div>
      
      <div>
        <SongFilterForm inputValue={filter} callback={setFilter} updateURL={setNewURLQuery}/>
      </div>

      {isLoading && <p>Loading...</p>}
      {isError && <p>Error loading songs</p>}
      
      {!isLoading && !isError && <SongList title = "Lista canciones" >
          {(songs ?? []).map((song:Song) => (<SongCard isSelect={parseInt(selectedSong) === song.id} callback={setSelectedSong} key={song.id} song={song} songUrl={songsURL}/>))}
      </SongList>}
    </div>
      
    </>
  )
}

export default HomePage