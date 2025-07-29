import { createContext, useContext, useState, type ReactNode } from "react";
import type { Song } from "../../mocked_information/Song/song.type";

interface FavoritesContextType {
  favorites: Song[];
  setFavorites: React.Dispatch<React.SetStateAction<Song[]>>;
}

interface FavoritesProviderProps {
  children: ReactNode;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const FavoritesProvider = ({ children } : FavoritesProviderProps) => {
  const [favorites, setFavorites] = useState<Song[]>([]);

  return (
    <FavoritesContext.Provider value={{ favorites, setFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error("useFavorites solo se puede usar dentro de FavoritesProvider");
  }
  return context;
};