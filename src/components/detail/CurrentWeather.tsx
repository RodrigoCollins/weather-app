import React from "react";
import { Typography, Box, Avatar, Paper, LinearProgress } from "@mui/material";
import { CurrentWeather as CurrentWeatherType } from "@/types/currentWeather";
import {
  WbSunny as WbSunnyIcon,
  Air as AirIcon,
  Opacity as PressureGageIcon,
  Grain as GrainIcon,
  Visibility as VisibilityIcon,
  WbSunny as UvIndexIcon,
  Cloud as CloudIcon,
  Thunderstorm as ThunderstormIcon,
} from "@mui/icons-material";

type CurrentWeatherProps = {
  current: CurrentWeatherType;
};

export const CurrentWeather: React.FC<CurrentWeatherProps> = ({ current }) => (
  <Box mb={4}>
    <Paper elevation={3} sx={{ padding: 2 }}>
      <Typography variant="h5" gutterBottom>
        Clima Actual
      </Typography>
      <Box display="flex" alignItems="center" mb={2}>
        <Avatar
          src={`https:${current.condition.icon}`}
          alt={current.condition.text}
          sx={{ width: 64, height: 64, mr: 2 }}
        />
        <Box>
          <Typography variant="h6">
            Temperatura: {current.temp_c}°C ({current.temp_f}°F)
          </Typography>
          <Typography>
            Se siente como: {current.feelslike_c}°C ({current.feelslike_f}°F)
          </Typography>
          <Typography>Descripción: {current.condition.text}</Typography>
        </Box>
      </Box>
      <Box display="flex" flexDirection="column" gap={2}>
        <Box display="flex" alignItems="center">
          <PressureGageIcon sx={{ width: 24, height: 24 }} />
          <Typography ml={1}>Humedad: {current.humidity}%</Typography>
        </Box>
        <Box display="flex" alignItems="center">
          <AirIcon sx={{ width: 24, height: 24 }} />
          <Typography ml={1}>
            Viento: {current.wind_kph} km/h ({current.wind_mph} mph){" "}
            {current.wind_dir}
          </Typography>
        </Box>
        <Box display="flex" alignItems="center">
          <GrainIcon sx={{ width: 24, height: 24 }} />
          <Typography ml={1}>
            Presión: {current.pressure_mb} mb ({current.pressure_in} in)
          </Typography>
        </Box>
        <Box display="flex" alignItems="center">
          <VisibilityIcon sx={{ width: 24, height: 24 }} />
          <Typography ml={1}>
            Precipitación: {current.precip_mm} mm ({current.precip_in} in)
          </Typography>
        </Box>
        <Box display="flex" alignItems="center">
          <UvIndexIcon sx={{ width: 24, height: 24 }} />
          <Typography ml={1}>Índice UV: {current.uv}</Typography>
        </Box>
        <Box display="flex" alignItems="center">
          <CloudIcon sx={{ width: 24, height: 24 }} />
          <Typography ml={1}>Cobertura de Nubes: {current.cloud}%</Typography>
        </Box>
        <Box display="flex" alignItems="center">
          <ThunderstormIcon sx={{ width: 24, height: 24 }} />
          <Typography ml={1}>
            Ráfagas: {current.gust_kph} km/h ({current.gust_mph} mph)
          </Typography>
        </Box>
      </Box>
    </Paper>
  </Box>
);
