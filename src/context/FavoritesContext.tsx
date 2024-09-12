import { useSessionStorage } from "@/hooks/useSessionStorage";
import React, { createContext, useContext } from "react";

interface FavoritesContextProps {
  favorites: string[];
  addFavorite: (city: string) => void;
  removeFavorite: (city: string) => void;
  isFavorite: (city: string) => boolean;
}

const FavoritesContext = createContext<FavoritesContextProps | undefined>(
  undefined
);

export const useFavoritesContext = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error("useFavorites debe usarse dentro de FavoritesProvider");
  }
  return context;
};

interface FavoritesProviderProps {
  children: React.ReactNode;
}

export const FavoritesProvider: React.FC<FavoritesProviderProps> = ({
  children,
}) => {
  const [favorites, setFavorites] = useSessionStorage<string[]>(
    "favorites",
    []
  );

  const addFavorite = (city: string) => {
    if (!favorites.includes(city)) {
      setFavorites((prev) => [...prev, city]);
    }
  };

  const removeFavorite = (city: string) => {
    setFavorites((prev) => prev.filter((fav) => fav !== city));
  };

  const isFavorite = (city: string) => {
    return favorites.includes(city);
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
