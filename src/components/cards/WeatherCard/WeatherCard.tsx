import React from "react";
import { Card, CardContent, useMediaQuery, useTheme } from "@mui/material";
import { WeatherApiResponse } from "@/types/currentWeather";
import { useLocation, useNavigate } from "react-router-dom";
import { paths } from "@/routes/paths";
import { useFavoritesContext } from "@/context";
import { CardFooter, CardHeader, CardInfo } from "./_components";

type Props = {
  data: WeatherApiResponse;
};

export const WeatherCard: React.FC<Props> = ({ data }) => {
  const { addFavorite, removeFavorite, isFavorite } = useFavoritesContext();
  const theme = useTheme();
  const pathLocation = useLocation();
  const navigate = useNavigate();
  const isFavPage = pathLocation.pathname === paths.favorites;
  const isDesktop = useMediaQuery(theme.breakpoints.up("md")) && !isFavPage;

  const { location, current } = data;

  const handleFavoriteToggle = () => {
    if (isFavorite(location.name)) {
      removeFavorite(location.name);
    } else {
      addFavorite(location.name);
    }
  };

  return (
    <Card
      sx={{
        width: "100%",
        maxWidth: isDesktop ? 600 : 360,
        height: isDesktop ? 550 : 500,
        position: "relative",
        marginTop: 0,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardContent
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <CardHeader location={location} current={current} />
        <CardInfo current={current} />
        <CardFooter
          location={location}
          isFavorite={isFavorite(location.name)}
          onFavoriteToggle={handleFavoriteToggle}
          navigate={navigate}
        />
      </CardContent>
    </Card>
  );
};
