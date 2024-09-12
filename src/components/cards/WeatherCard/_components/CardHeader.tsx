import React from "react";
import {
  CardMedia,
  Typography,
  Box,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { WeatherApiResponse } from "@/types/currentWeather";

type Props = {
  location: WeatherApiResponse["location"];
  current: WeatherApiResponse["current"];
};

export const CardHeader: React.FC<Props> = ({ location, current }) => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
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
  );
};
