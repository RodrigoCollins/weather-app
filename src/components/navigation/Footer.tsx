import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HomeIcon from "@mui/icons-material/Home";
import React from "react";
import { Paper, Theme, useMediaQuery } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { paths } from "@/routes/paths";

export const Footer: React.FC = () => {
  const upMd = useMediaQuery((theme: Theme) => theme.breakpoints.up("md"));
  const location = useLocation();
  const navigate = useNavigate();

  if (upMd) return null;

  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation
        showLabels
        value={location.pathname}
        aria-label="Navegación de la aplicación"
      >
        <BottomNavigationAction
          label="Inicio"
          value={paths.home}
          icon={<HomeIcon />}
          onClick={() => navigate(paths.home)}
          aria-label="Ir al inicio"
        />
        <BottomNavigationAction
          label="Favoritos"
          value={paths.favorites}
          icon={<FavoriteIcon />}
          onClick={() => navigate(paths.favorites)}
          aria-label="Ir a favoritos"
        />
      </BottomNavigation>
    </Paper>
  );
};
