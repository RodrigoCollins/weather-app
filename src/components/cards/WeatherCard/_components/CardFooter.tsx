import React from "react";
import { Box, IconButton, Button } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

type Props = {
  location: {
    name: string;
  };
  isFavorite: boolean;
  onFavoriteToggle: () => void;
  navigate: (path: string) => void;
};

export const CardFooter: React.FC<Props> = ({
  location,
  isFavorite,
  onFavoriteToggle,
  navigate,
}) => (
  <Box
    mt={3}
    display="flex"
    flexDirection="row"
    justifyContent="space-between"
    alignItems="center"
  >
    <IconButton
      aria-label={isFavorite ? "Eliminar de favoritos" : "Agregar a favoritos"}
      onClick={onFavoriteToggle}
    >
      {isFavorite ? <FavoriteIcon color="primary" /> : <FavoriteBorderIcon />}
    </IconButton>
    <Button
      variant="contained"
      color="primary"
      onClick={() => navigate(`/detail/${location.name.toLowerCase()}`)}
    >
      Ver más
    </Button>
  </Box>
);
