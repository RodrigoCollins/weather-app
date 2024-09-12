import React from "react";
import { Typography, Box, Paper, Stack } from "@mui/material";
import {
  WbSunny as WbSunnyIcon,
  AcUnit as AcUnitIcon,
  Cloud as CloudIcon,
  Grain as UvIndexIcon,
  Opacity as OpacityIcon,
} from "@mui/icons-material";
import { DayForecast } from "@/types/forecastWeather";
import { formatDate } from "@/helpers/dateFormat";

type ForecastProps = {
  forecast: {
    forecastday: {
      date: string;
      day: DayForecast;
    }[];
  };
};

export const Forecast: React.FC<ForecastProps> = ({ forecast }) => (
  <Box mb={4}>
    <Typography variant="h5" gutterBottom>
      Pronóstico a 5 Días
    </Typography>

    <Box
      sx={{ display: { xs: "block", md: "flex" }, gap: 2, flexWrap: "wrap" }}
    >
      {forecast.forecastday.map((day, index) => (
        <Paper
          key={index}
          elevation={3}
          sx={{
            padding: 3,
            borderRadius: "8px",
            marginBottom: 2,
          }}
        >
          <Typography
            variant="subtitle1"
            gutterBottom
            sx={{ color: "#2c3e50", fontWeight: 600 }}
          >
            {formatDate(day.date)}
          </Typography>

          <Typography variant="body1" gutterBottom sx={{ color: "#34495e" }}>
            {day.day.condition.text}
          </Typography>

          <Stack spacing={2}>
            <Box display="flex" alignItems="center">
              <WbSunnyIcon sx={{ width: 28, height: 28, color: "#f39c12" }} />
              <Typography ml={1} sx={{ fontWeight: "bold", color: "#e74c3c" }}>
                Temp Máx: {day.day.maxtemp_c}°C ({day.day.maxtemp_f}°F)
              </Typography>
            </Box>

            <Box display="flex" alignItems="center">
              <CloudIcon sx={{ width: 28, height: 28, color: "#95a5a6" }} />
              <Typography ml={1} sx={{ fontWeight: "bold", color: "#3498db" }}>
                Temp Mín: {day.day.mintemp_c}°C ({day.day.mintemp_f}°F)
              </Typography>
            </Box>

            <Box display="flex" alignItems="center">
              <OpacityIcon sx={{ width: 28, height: 28, color: "#1abc9c" }} />
              <Typography ml={1} sx={{ color: "#34495e" }}>
                Probabilidad de Lluvia: {day.day.daily_chance_of_rain}%
              </Typography>
            </Box>

            <Box display="flex" alignItems="center">
              <AcUnitIcon sx={{ width: 28, height: 28, color: "#3498db" }} />
              <Typography ml={1} sx={{ color: "#34495e" }}>
                Probabilidad de Nieve: {day.day.daily_chance_of_snow}%
              </Typography>
            </Box>

            <Box display="flex" alignItems="center">
              <UvIndexIcon sx={{ width: 28, height: 28, color: "#e67e22" }} />
              <Typography ml={1} sx={{ color: "#34495e" }}>
                Índice UV: {day.day.uv}
              </Typography>
            </Box>
          </Stack>
        </Paper>
      ))}
    </Box>
  </Box>
);
