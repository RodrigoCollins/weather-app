import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { FavoritesContext } from "./FavoritesContext";

export { FavoritesProvider } from "./FavoritesContext";
export { AuthProvider } from "./AuthContext";

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe usarse dentro de AuthProvider");
  }
  return context;
};

export const useFavoritesContext = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error("useFavorites debe usarse dentro de FavoritesProvider");
  }
  return context;
};
