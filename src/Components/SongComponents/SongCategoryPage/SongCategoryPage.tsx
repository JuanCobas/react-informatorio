import { longestSongs, sameCategorySongs, artistSongs, mostListenedSongs } from '../../../mocked_information/Song/song.info'

import SongList from '../SongList/SongList';
import SongCard from '../SongCard/SongCard';
import SONG_URL from '../../../mocked_information/song.URL';
import SongFilterForm from '../SongFilterForm/songFilterForm';
import { useState } from 'react';
import { useParams } from 'react-router';
import { useFavorites } from '../../../Contexts/FavoriteContext/FavoriteContext';
import { useQuery } from '@tanstack/react-query';
import { musicService } from '../../../mocked_information/Song/service';
import type { Song } from '../../../mocked_information/Song/song.type';

function SongCategoryPage() {
  

  const songsURL : string = SONG_URL;

  const [URLQueryValue, setURlQueryValue] = useState(() => new URLSearchParams(window.location.search));
  const [filter, setFilter] = useState(() => URLQueryValue.get("filter") ?? "");
  const { favorites } = useFavorites();

  const { data: generoSongs, isLoading, isError } = useQuery<{genre: string; songs: Song[];}[]>({
  queryKey: ['songs',],
  queryFn: musicService.getGenres,
});

  
  

  const {id} = useParams();
  
  
  const setNewURLQuery = (filter:string) => {
    const query = new URLSearchParams(window.location.search);
    query.set("filter", filter);
    setURlQueryValue(query);
    const newURL = [window.location.pathname, query].filter(Boolean).join('?');
    window.history.pushState({},"",newURL);
  }


const getSongsByGenre = (genre: string) => {
   if (!generoSongs) return []; 

  const genreObject = generoSongs.find(({ genre: g }) => g === genre);
  return genreObject ? genreObject.songs : [];
};

const songs:Song[] = getSongsByGenre(id!);

const [selectedSong, setSelectedSong] = useState<string>("")


  return (
    <>
    <div>
      
      <div>
        <SongFilterForm title={'Filtrar por Nombre de cancion '} inputValue={filter} callback={setFilter} updateURL={setNewURLQuery}/>
      </div>

      {isLoading && <p>Loading...</p>}
      {isError && <p>Error loading songs</p>}
      
      {id==='Favoritos' ? 
        <SongList title = {id!} >
          {favorites.map((song) => (song.title.toLowerCase().includes(filter) && <SongCard isSelect={parseInt(selectedSong) === song.id} callback={setSelectedSong} key={song.id} song={song} songUrl={songsURL}/>))}
        </SongList> 
        
        :

        <SongList title = {id!} >
          {songs.map((song) => (song.title.toLowerCase().includes(filter) && <SongCard isSelect={parseInt(selectedSong) === song.id} callback={setSelectedSong} key={song.id} song={song} songUrl={songsURL}/>))}
        </SongList>
      }
      
      
    </div>
      
    </>
  )
}

export default SongCategoryPage