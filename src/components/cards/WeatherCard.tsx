import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  IconButton,
  Button,
  useMediaQuery,
  useTheme,
  Stack,
} from "@mui/material";
import {
  Water as HumidityIcon,
  Air as WindIcon,
  Compress as PressureIcon,
  Visibility as VisibilityIcon,
  WbSunny as UvIcon,
  Update as UpdateIcon,
} from "@mui/icons-material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { WeatherApiResponse } from "@/types/currentWeather";
import { useLocation, useNavigate } from "react-router-dom";
import { paths } from "@/routes/paths";
import { useFavoritesContext } from "@/context";

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
  const upMd = useMediaQuery(theme.breakpoints.up("md"));

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
        height: upMd ? 550 : 450,
        position: "relative",
        marginTop: 0,
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
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
        <Box>
          <Typography variant={isDesktop ? "h4" : "h5"} gutterBottom>
            {location.name}, {location.region}, {location.country}
          </Typography>
          <Box display="flex" alignItems="center" mb={2}>
            <CardMedia
              component="img"
              image={`https:${current.condition.icon}`}
              alt={current.condition.text}
              sx={{ width: isDesktop ? 100 : 64, height: isDesktop ? 100 : 64 }}
            />
            <Box ml={2}>
              <Typography variant={isDesktop ? "h5" : "h6"}>
                {current.temp_c} °C
              </Typography>
              <Typography variant="body1" color="textSecondary">
                {current.condition.text}
              </Typography>
            </Box>
          </Box>
        </Box>

        <Stack spacing={1.5}>
          <Box display="flex" alignItems="center">
            <HumidityIcon sx={{ color: "#1abc9c", mr: 1 }} />
            <Typography variant="body2" color="textSecondary">
              Humedad: <strong>{current.humidity}%</strong>
            </Typography>
          </Box>

          <Box display="flex" alignItems="center">
            <WindIcon sx={{ color: "#3498db", mr: 1 }} />
            <Typography variant="body2" color="textSecondary">
              Viento: <strong>{current.wind_kph} kph</strong>, dirección{" "}
              {current.wind_dir}
            </Typography>
          </Box>

          <Box display="flex" alignItems="center">
            <PressureIcon sx={{ color: "#e67e22", mr: 1 }} />
            <Typography variant="body2" color="textSecondary">
              Presión: <strong>{current.pressure_mb} mb</strong>
            </Typography>
          </Box>

          <Box display="flex" alignItems="center">
            <VisibilityIcon sx={{ color: "#9b59b6", mr: 1 }} />
            <Typography variant="body2" color="textSecondary">
              Visibilidad: <strong>{current.vis_km} km</strong>
            </Typography>
          </Box>

          <Box display="flex" alignItems="center">
            <UvIcon sx={{ color: "#f39c12", mr: 1 }} />
            <Typography variant="body2" color="textSecondary">
              Índice UV: <strong>{current.uv}</strong>
            </Typography>
          </Box>

          <Box display="flex" alignItems="center">
            <UpdateIcon sx={{ color: "#7f8c8d", mr: 1 }} />
            <Typography variant="body2" color="textSecondary">
              Última actualización: {current.last_updated}
            </Typography>
          </Box>
        </Stack>

        <Box
          mt={3}
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <IconButton
            aria-label={
              isFavorite(location.name)
                ? "Eliminar de favoritos"
                : "Agregar a favoritos"
            }
            onClick={handleFavoriteToggle}
          >
            {isFavorite(location.name) ? (
              <FavoriteIcon color="primary" />
            ) : (
              <FavoriteBorderIcon />
            )}
          </IconButton>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate(`/detail/${location.name.toLowerCase()}`)}
          >
            Ver más
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};
