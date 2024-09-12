import React from "react";
import { Box, Typography, Alert } from "@mui/material";
import { useFavorites } from "@/hooks";
import { WeatherCard } from "@/components/cards";
import { HelperText } from "@/components/favorites";
import { useFavoritesContext } from "@/context";
import { Loader } from "@/components/loaders";

const Favorites: React.FC = () => {
  const { favorites } = useFavoritesContext();
  const { favoriteWeatherData, isLoading, error } = useFavorites(favorites);

  if (isLoading) return <Loader />;
  if (error)
    return (
      <Box mt={3}>
        <Alert severity="error">{error}</Alert>
      </Box>
    );

  return (
    <Box sx={{ paddingBottom: 4, paddingTop: 2 }}>
      <Typography variant="h5" gutterBottom>
        Ciudades Favoritas
      </Typography>

      {!isLoading && !error && favoriteWeatherData?.length === 0 && (
        <HelperText />
      )}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: 2, md: 3 },
        }}
      >
        {favoriteWeatherData?.map((city) => (
          <WeatherCard key={city.location.name} data={city} />
        ))}
      </Box>
    </Box>
  );
};

export default Favorites;
